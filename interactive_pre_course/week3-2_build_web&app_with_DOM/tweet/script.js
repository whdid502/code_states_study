let DATA = [
  { user: 'ingikim', message: 'Welcome to Code States #codestates', created_at: '2019-01-03 12:30:20' },
  { user: 'satya', message: 'this is test message #pair #programming', created_at: '2019-01-04 18:30:20' },
  { user: 'sundar', message: 'code now! #work #hard', created_at: '2019-01-05 07:30:20' },
  { user: 'steve', message: 'Stay hungry, and stay foolish', created_at: '2015-01-03 12:30:20' },
  { user: 'tim', message: 'education for real world', created_at: '2019-01-04 18:30:20' }
];

const select_ul = document.querySelector('#listZone')
const new_user = document.querySelector('#new_user')
const new_tweet = document.querySelector('#new_tweet')

function current_time() {
  return `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
}

function create_list(user, message, created_at) {
  let li_add_at_ul = select_ul.appendChild(document.createElement('li'))
  li_add_at_ul.setAttribute('class', 'listItem makeSmallMargin')
  let div_add_at_li = li_add_at_ul.appendChild(document.createElement('div'))
  div_add_at_li.setAttribute('class', 'tweetLog')
  let tweet_user_div = div_add_at_li.appendChild(document.createElement('div'))
  tweet_user_div.setAttribute('class', 'tweetUser')
  // tweet_user_div.setAttribute('onclick','filter()')
  tweet_user_div.textContent = user
  let tweet_msg_div = div_add_at_li.appendChild(document.createElement('div'))
  tweet_msg_div.setAttribute('class', 'tweetMessage')
  tweet_msg_div.textContent = message
  let time_div = li_add_at_ul.appendChild(document.createElement('div'))
  time_div.setAttribute('class', 'dateLog')
  time_div.textContent = created_at
} // li를 만들고 안에 내용 삽입해주는 함수

function display_tweet() {
  for (let key of DATA) {
    create_list(key['user'], key['message'], key['created_at'])
  } // 최초 화면 display
}

function clear_display() {
  while (select_ul.hasChildNodes()) {
    select_ul.removeChild(select_ul.firstChild)
  }
}


function record_display_new_tweet() {

  if (new_user.value.length === 0) {
    alert('사용자 이름을 적어주세요')
  } else if (new_tweet.value.length === 0) {
    alert('트윗을 적어주세요')
  } else {
    let tweet_info = {}
    tweet_info['user'] = new_user.value
    tweet_info['message'] = new_tweet.value
    tweet_info['created_at'] = current_time()
    DATA.unshift(tweet_info)
  }
  new_user.value = ''
  new_tweet.value = ''
  // console.log(DATA)
  clear_display()
  display_tweet()
  add_event_filter()
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}//DATA 섞기

function refresh_button() {
  clear_display()
  shuffle(DATA)
  display_tweet()
  add_event_filter()
}

function filter() {
  // 버튼을 누르면 버튼과 이름이 같은 친구만 보여주면 됨.
  clear_display()
  // console.log(this.textContent)
  let filtered_user = this.textContent
  // console.log(filtered_user)
  for (let key of DATA) {
    // console.log(key['user'])
    // console.log(key)
    if (key['user'] === filtered_user) {
      create_list(key['user'], key['message'], key['created_at'])
    }
  }
}

function add_event_filter() {
  document.querySelectorAll('.tweetUser').forEach(item => {
    item.addEventListener('click', filter)
  })
} // filter event 추가하는 함수


display_tweet()

document.getElementById('submitButton').onclick = record_display_new_tweet

document.getElementById('refreshButton').onclick = refresh_button

add_event_filter()