무한스크롤 Infinite Scroll
무한스크롤은 화면의 맨 아래까지 스크롤을 하면 새로운 컴포넌트가 랜더되는 형태이다. 페이스북, 인스타그램 등 다양한 사이트가 이러한 무한 스크롤 형식을 띄고 있다. 불필요하게 수많은 데이터를 긁어오기보다는, 한번에 10-20개 정도의 포스트만 가져와서 스크롤 될 때마다 업데이트 되는 형식이다.

아직은 백엔드에서 상품 리스트 API를 받아오지 못하는 상황이라 mock.json 파일의 객체로 무한 스크롤을 구현하고자 한다.

완성된 코드
import React from "react";
import List from "../../../Components/List/List";
import Sorting from "../../../Components/Sorting/Sorting";
import "./Allitem.scss";

class Allitem extends React.Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      items: 10,
      preItems: 0,
    };
  }

  componentDidMount() {
    fetch("/Data/mock.json")
      .then((res) => res.json())
      .then((res) => {
        let result = res.data.slice(this.state.preItems, this.state.items);
        this.setState({
          productList: [...this.state.productList, ...result],
        });
      });
    window.addEventListener("scroll", this.infiniteScroll, true);
  }

  infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        preItems: this.state.items,
        items: this.state.items + 10,
      });
      this.componentDidMount();
    }
  };

  render() {
    const { productList } = this.state;
    return (
      <article className="Allitem">
        <div className="topInfo">
          <div className="totalItems">
            <p className="totalNum">
              총 <span className="pointSpan">1541</span> 개의 상품이
              조회되었습니다.
            </p>
          </div>
          <Sorting />
        </div>
        <List productList={productList} />
      </article>
    );
  }
}

export default Allitem;
하나씩 뜯어보자
지정한 숫자만큼의 배열 가져오기

  constructor() {
    super();

    this.state = {
      productList: [],
      items: 10,
      preItems: 0,
    };
  }

  componentDidMount() {
    fetch("/Data/mock.json")
      .then((res) => res.json())
      .then((res) => {
        let result = res.data.slice(this.state.preItems, this.state.items);
        this.setState({
          productList: [...this.state.productList, ...result],
        });
      });
    window.addEventListener("scroll", this.infiniteScroll, true);
  }
mock.json 파일 객체가 많지 않아서 아이템을 10개씩 불러오기로 했다. slice 메소드로 인덱스 0 부터 10 까지의 아이템을 json 파일에서 받아오고, 이를 result 변수에 넣어주었다. productList 에 불러온 객체들이 하나씩 들어가게 된다.

컴포넌트가 마운트 되는 순간 infiniteScroll() 함수가 실행된다.

스크롤이 끝에 다다르면 componentDidMount() 실행하기
  infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        preItems: this.state.items,
        items: this.state.items + 10,
      });
      this.componentDidMount();
    }
  };
document.documentElement에 접근하면 html geometry 값에 접근이 가능하다. 이를 사용해서 우리는 document의 스크롤 높이에 접근할 수 있다.



offsetTop: 왼쪽 끝 맨 위를 기준으로 한 위치값. container에 위치값을 따로 부여하지 않으면 0으로 고정되어 있다.
clientTop : client와 offset의 사이에 있는 경계선이다.
scrollHeight : 화면에 보이지 않는 곳까지의 총 길이를 의미한다. 스크롤로 지나온 곳, 현재의 보고 있는 곳, 앞으로 내려갈 곳을 모두 합친 사이트의 총 길이.
scrollTop : 스크롤해서 올리면 클라이언트에는 보이지 않는 올라가버린 구간

현재 clientHeight와 offsetHeight는 같은 상태이다.

https://javascript.info/size-and-scroll

스크롤 높이를 검사해서 끝에 다다를때 데이터를 불러올 수 있지만, 이렇게 되면 함수를 한번밖에 실행하지 못한다. 추가로 데이터가 불러와지면 스크롤의 총 길이가 변하기 때문이다. 계속 변하는 총 길이를 계산해서 데이터를 불러오는 방법을 찾아야 한다.

if (scrollTop + clientHeight >= scrollHeight)

스크롤탑과 클라이언트 높이의 값이 스크롤 높이보다 크거나 같을 때, 라는 조건을 만들었다.

사이트 전체를 컨트롤하는 것이라면 document.documentElement의 값만을 참조하는 것은 위험할 수 있다고 한다. 따라서 body에 담겨있는 geometry 값과 비교하여 둘 중에서 큰 값을 따르는 방식으로 함수를 돌리기로 한다.

    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
스크롤 탑과 클라이언트 높이의 값이 스크롤 높이보다 크거나 같을 때, 즉 스크롤의 끝에 다다랐을때 정해준 스테이트 값을 업데이트 시켜준다. 다시 fetch 함수를 실행해서 서버로부터 추가 데이터를 받아 array에 저장하는 것이다.

    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        preItems: this.state.items,
        items: this.state.items + 10,
      });
      this.componentDidMount();
    }
특정 엘리먼트의 스크롤이 아닌, 페이지 전체에 적용이 되어야 하기 때문에 전역으로 적용될 수 있는 윈도우 이벤트 리스너를 사용하였다.

window.addEventListener("scroll", this.infiniteScroll, true);

(추가) 2차 수정
데이터를 불러오는 것과 관련된 로직을 따로 함수로 분리하고, this.componentDidMount 전체를 직접 호출하는 지금의 구조를 바꾸라는 피드백을 받았다. 분리하면 아래와 같이 된다.

import React from "react";
import List from "../../../Components/List/List";
import Sorting from "../../../Components/Sorting/Sorting";
import "./Allitem.scss";

class Allitem extends React.Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      items: 10,
      preItems: 0,
    };
  }

    componentDidMount() {
      this.getData();
      window.addEventListener("scroll", this.infiniteScroll);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.infiniteScroll);
    }

    getData = () => {
      const { preItems, items, productList } = this.state;
      fetch("/Data/mock.json")
        .then((res) => res.json())
        .then((res) => {
          const result = res.data.slice(preItems, items);
          this.setState({
            productList: [...productList, ...result],
          });
        });
    }

    infiniteScroll = () => {
      const { documentElement, body } = document;
      const { items } = this.state;

      const scrollHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
      const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
      const clientHeight = documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        this.setState({
          preItems: items,
          items: items + 10,
        });
        this.getData();
      }
    };

  render() {
    const { productList } = this.state;
    return (
      <article className="Allitem">
        <div className="topInfo">
          <div className="totalItems">
            <p className="totalNum">
              총 <span className="pointSpan">1541</span> 개의 상품이
              조회되었습니다.
            </p>
          </div>
          <Sorting />
        </div>
        <List productList={productList} />
      </article>
    );
  }
}

export default Allitem;
결과물
우와아아아아아ㅏㅏㅏ!!!!!!!