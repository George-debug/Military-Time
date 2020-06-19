import { detect } from 'detect-browser'

const msg = "Sir, this might not work on your browser! ( ˇ෴ˇ )"

export default function vChecker(){

  let info = detect()
  if(!info){
    alert(msg)
    return
  }
  
  let version = parseFloat(info.version)
  let name = info.name

  alert(`${name} ${version}`)

/*
  switch (name) {
    case 'chrome':
      if( version < 57 ) alert(msg)
      return

    case 'edge':
      if( version < 57 ) alert(msg)
      return

    case 'firefox':
      if( version < 52 ) alert(msg)
      return

    case 'opera':
      if( version < 44 ) alert(msg)
      return

    case 'safari':
      if( version < 11 ) alert(msg)
      return

    default:
      alert(msg)
      return
  }
*/
}