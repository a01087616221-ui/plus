// 화면에 숫자를 추가하는 함수
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// 화면을 깨끗하게 지우는 함수 (C 버튼)
function clearDisplay() {
    document.getElementById('display').value = '';
}

// 마지막 글자 하나만 지우는 함수 (← 버튼)
function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

// 계산 결과를 보여주는 함수 (= 버튼)
function calculateResult() {
    try {
        // eval 함수는 수식을 계산해줍니다.
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
