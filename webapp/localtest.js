let baseURL = 'https://46d39fab.ngrok.io/horseman';

let body = {
  width: 640,
  height: 480,
  url: 'https://wobbals.github.io/horseman/viewer.html?env=tbdev&sessionId=2_MX40NDkzNTM0MX5-MTQzMjEzMzg0ODIwNn4xOW03WlA2NWwyM0RKS3Z0ZFpWN2FoVHR-fg&apiKey=44935341&token=T1==cGFydG5lcl9pZD00NDkzNTM0MSZzZGtfdmVyc2lvbj10YnBocC12MC45MS4yMDExLTA3LTA1JnNpZz1lNDg2NGQ0NTdkYWNhNGVmZDgwNDdhZjc3YzEzZmY3YzQ0YzBlN2NhOnNlc3Npb25faWQ9Ml9NWDQwTkRrek5UTTBNWDUtTVRRek1qRXpNemcwT0RJd05uNHhPVzAzV2xBMk5Xd3lNMFJLUzNaMFpGcFdOMkZvVkhSLWZnJmNyZWF0ZV90aW1lPTE0OTg3NjU3NDImcm9sZT1tb2RlcmF0b3Imbm9uY2U9MTQ5ODc2NTc0Mi41NjY0OTIzMTg5Njc2JmV4cGlyZV90aW1lPTE1MDEzNTc3NDI=',
};

curl -v \
-H "Content-Type: application/json" \
-d "{\"width\": \"1280\", \
 \"height\": \"720\", \
 \"url\": \"https://wobbals.github.io/horseman/viewer.html?env=tbdev&sessionId=2_MX40NDkzNTM0MX5-MTQzMjEzMzg0ODIwNn4xOW03WlA2NWwyM0RKS3Z0ZFpWN2FoVHR-fg&apiKey=44935341&token=T1==cGFydG5lcl9pZD00NDkzNTM0MSZzZGtfdmVyc2lvbj10YnBocC12MC45MS4yMDExLTA3LTA1JnNpZz1lNDg2NGQ0NTdkYWNhNGVmZDgwNDdhZjc3YzEzZmY3YzQ0YzBlN2NhOnNlc3Npb25faWQ9Ml9NWDQwTkRrek5UTTBNWDUtTVRRek1qRXpNemcwT0RJd05uNHhPVzAzV2xBMk5Xd3lNMFJLUzNaMFpGcFdOMkZvVkhSLWZnJmNyZWF0ZV90aW1lPTE0OTg3NjU3NDImcm9sZT1tb2RlcmF0b3Imbm9uY2U9MTQ5ODc2NTc0Mi41NjY0OTIzMTg5Njc2JmV4cGlyZV90aW1lPTE1MDEzNTc3NDI=\" \
 }" \
 http://localhost:3000/horseman/job