let url = window.location.href;
let old_domain = 'youtube.com';
let new_domain = 'hooktube.com';

if(url.indexOf(old_domain) >= 0) {
  let new_url = url.replace(old_domain, new_domain)
  window.location.href = new_url;
}
