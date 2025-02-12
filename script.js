const rejectionBtn = document.querySelector('.no')
const yesBtn = document.querySelector('.yes')
const container = document.querySelector('.container')
const question = document.querySelector('.question')
const questionContainer = document.querySelector('.question-container')
const happy = document.querySelector('.happy')
const sad = document.querySelector('.sad')

yesBtn.addEventListener('click', function(){
    questionContainer.remove()

    happy.style.display = ''
})
rejectionBtn.addEventListener('click', function(){
    questionContainer.remove();

    sad.style.display = '';
    alert('no me hables mas nunca ;(');
})