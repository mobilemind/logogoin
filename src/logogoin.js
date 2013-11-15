/*jshint globalstrict: true*/
// complete login form if current page is the login page
// else open that page
var u, p, d = document;
if (/^https:\/\/airborne\.gogoinflight\.com\/gbp\/signInsignUp.*/.test(location.href)) {
  d.getElementById('returningRadio').checked = true;
  d.getElementById('loginEmail').value = u ? u : window.prompt('Username/email:','');
  d.getElementById('loginPassword').value = p ? p: window.prompt('Password:','');
  d.getElementsByName('_eventId_next')[1].click();
}
else location.href = 'https://airborne.gogoinflight.com/gbp/signInsignUp.do?login=true';
