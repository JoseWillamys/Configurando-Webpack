export default function valoresCheckBox() {
    const valores = document.querySelectorAll('.opcoes');
    if (valores.length === 0) {
        console.error('elementos não encontrados!');
        return false;
    }

    let checkBoxChecked = [];
    valores.forEach(obj => {
        if (obj.checked) {
            checkBoxChecked.push(obj.value);
        }
    });

    return checkBoxChecked.length === 0 ? false : checkBoxChecked;
}

export function numeroAleatorio(max, min = 0) {
    return Number(Math.floor(Math.random() * (max - min) + min));
}