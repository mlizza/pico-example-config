T({
  name: "pico-test-one",
  url: "https://github.com/mlizza/pico-example-target?ref=1.0.0",
  up: ["docker-compose", "up", "-d"],
  down: ["docker-compose", "down"],
  branch: "master"
});
