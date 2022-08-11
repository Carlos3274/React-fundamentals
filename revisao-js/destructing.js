
function handleMouseMove01(event) {
  const clientX = event.clientX
  const clientY = event.clientY
  console.log(clientX,clientY)
}

function handleMouseMove02(event) {
  const { clientX, clientY } = event
  console.log(clientX,clientY)
}

function handleMouseMove03({ clientX, clientY }) {
  console.log(clientX, clientY)
}

const frutas = ['Banana', 'Uva']
/* const [fruta1] = frutas */  // Pegará o elemento 0 de frutas e criará const fruta1 = 'Banana'
const [fruta1, fruta2] = frutas // frutas continuará sendo frutas.


const [color, setColor] = useState()