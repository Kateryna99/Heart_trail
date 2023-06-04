


class HeartTrail {
    constructor(tcTitle,heartTitle) {
        this.tcTitle = tcTitle
        this.heartTitle = heartTitle
    }
    getRandomNumber(min,max){
        return min + Math.floor(Math.random()*(max-min+1))
    }
    createElement(){
        const targetContainer = document.querySelector(this.tcTitle)
        targetContainer.addEventListener('mousemove',(event)=>{
            const x = event.clientX
            const y = event.clientY

           const heart = document.createElement('span')
            heart.classList.add(this.heartTitle)
            heart.style.left = x + 'px'
            heart.style.top = y + 'px'
            heart.style.width =this.getRandomNumber(1,100)+'px'
            heart.style.height = this.getRandomNumber(1,100) + 'px'

            setTimeout(()=>{
                targetContainer.removeChild(heart)
            },3000)

            targetContainer.append(heart)
        })
}
}

const heartTrail = new HeartTrail('.wrapper','wrapper__heart')

heartTrail.createElement()