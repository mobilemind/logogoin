/*jshint globalstrict: true*/
// complete login form if current page is the login page
// else open that page
var u = 'user', p = 'password', d = document;
if (/^https:\/\/airborne\.gogoinflight\.com\/./.test(location.href)) {
  d.getElementById('returningRadio').checked = true;
  d.getElementById('loginEmail').value = u;
  d.getElementById('returningRadio').value = p;
  d.forms[0].submit();
}
else location.href = 'https://airborne.gogoinflight.com/gbp/signInsignUp.do?execution=e2s1';
void(0);
