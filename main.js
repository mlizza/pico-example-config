T({
  name: "pico-test-one",
  url: "https://github.com/mlizza/example-target",
  up: ["docker-compose", "up", "-d", "--quiet"],
  down: ["docker-compose", "down"],
  auth: "github"
});
