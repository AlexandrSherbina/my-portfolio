# Массив с названиями компонентов, запуск .\generate-components.ps1
$components = @("users", "overview", "settings")

# Цикл для генерации каждого компонента
ForEach ($component in $components) {
    ng generate component $component
}
