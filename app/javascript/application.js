// Entry point for the build script in your package.json
import Rails from "@rails/ujs" // yarn add @rails/ujs
Rails.start()
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
