const consolelog = document.querySelector('#consolelog');

consolelog.addEventListener('click', () => {
    alert('Служит для вывода инфорации');
})

const Alert = document.querySelector('#Alert');

Alert.addEventListener('click', () => {
    alert('Служит для вывода информации на экран с сообщением и приостанавливает выполнения скрипта, пока пользователь не нажмет "ОК" ');
})    

const Prompt = document.querySelector('#Prompt');

Prompt.addEventListener('click', () => {
    alert('Служит для вывода  модального окна с заголовком title, полем для ввода текста, заполненным строкой по умолчанию default и кнопками OK/CANCEL.');
})    