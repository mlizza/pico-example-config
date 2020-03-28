T({
  name: "pico-test-one",
  url: "github.com/mlizza/pico-example-target.git?ref=v1.0.0",
  up: ["docker-compose", "up", "-d"],
  down: ["docker-compose", "down"],
  branch: "master"
});
