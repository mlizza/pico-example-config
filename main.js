T({
  name: "pico-test-one",
  url: "https://github.com/mlizza/pico-example-target",
  up: ["docker-compose", "up", "-d"],
  down: ["docker-compose", "down"],
  branch: "master"
});
