T({
  name: "pico-test-one",
  url: "https://github.com/mlizza/pico-example-target.git",
  up: ["docker-compose", "up", "-d", "--quiet"],
  down: ["docker-compose", "down"],
  auth: "github"
});
