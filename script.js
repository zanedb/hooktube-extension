let url = new URL(window.location.href);
let old_domain = 'youtube.com';
let new_domain = 'hooktube.com';

if(url.hostname.indexOf(old_domain) >= 0 && url.pathname === "/watch") {
  let new_url = url.href.replace(old_domain, new_domain);
  window.location.href = new_url;
}
