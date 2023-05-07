function validateForm() {
  const signupForm = document.getElementById('signupForm');
  const id = document.getElementById('id');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const username = document.getElementById('username');
  const nickname = document.getElementById('nickname');
  const phoneNumber = document.getElementById('phoneNumber');
  const email = document.getElementById('email');

  if (id.value == '') {
    alert('아이디를 입력하세요.');
    return false;
  }

  if (password.value == '') {
    alert('비밀번호를 입력하세요.');
    return false;
  }

  if (confirmPassword.value == '') {
    alert('비밀번호를 확인하세요.');
    return false;
  }

  if (username.value == '') {
    alert('이름을 입력하세요.');
    return false;
  }

  if (nickname.value == '') {
    alert('닉네임을 입력하세요.');
    return false;
  }

  if (phoneNumber.value == '') {
    alert('휴대폰 번호를 입력하세요.');
    return false;
  }

  if (email.value == '') {
    alert('이메일을 입력하세요.');
    return false;
  } 
  
}
