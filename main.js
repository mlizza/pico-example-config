T({
  name: "pico-test-one",
  url: "https://github.com/picostack/example-target",
  up: ["docker-compose", "up", "-d", "--quiet"],
  down: ["docker-compose", "down"],
  auth: "github"
});

A({
  name: "github",
  path: "auth_github",
  user_key: "GIT_USERNAME",
  pass_key: "GIT_PASSWORD"
});
