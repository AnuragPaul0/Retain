'use client'
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync'
import { List, arrayMove, arrayRemove } from "react-movable"
import { useState, useEffect } from "react"
import { Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { createRoot } from 'react-dom/client'
import { Card, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/button"

let tog, parent, p = 5, container, a:any, k:any, b:any, f, pd, tr:any, co = 2, greens = 'grb',
cnr = { width: '51vw' }, nextId = 35.2, inp='',ri=0, ci=2, sta = 'State', adde = 'added',
// check:{[key:string]:any} = { dark:0, system:0, light:0 },

HandleIcon = () => <svg height="20px" className="feather feather-move" viewBox="0 0 24 24"
  fill="currentColor"><path d="M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z"/>
  <path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z"/>
  <path d="M19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z"/>
  <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"/>
  <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"/>
  <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"/>
  <path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z"/>
  <path d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z"/>
  <path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21Z"/>
</svg>,

// Card text-black
buttonc = (t: any, s = 'whi') => { if (s) s+=' '; return <Button id='cbt' className=
{s+"mwu h-auto shadow-medium p-1"} variant="flat" color="default">{ t }</Button> },

cele = (d: any) => { d.forEach((e: any, i: any) => {
  d[i] = <Card className="alc w90 justify-content-md-center">{e}</Card>})
// console.log(d)
return d },

el2 = [
  <div key='1' id='alsc'>{buttonc('tags') } {buttonc('contain', greens)} {buttonc('onsale')}</div>,
<div key='2' id='alsc'>{buttonc('tags') } {buttonc('contain', greens)} {buttonc('__labelNew')}</div>,
    <div key='3' id='alsc'>{buttonc('Discount %') } {buttonc('is', greens)} {buttonc(0)}</div>,
    <div key='4' id='alsc'>{buttonc('Image list Product Image 2') }{ buttonc('is', greens)}
{buttonc('empty')}</div> ],

addes = (r=0, c=2) => <Button onClick={ (e: any) => { ri=r, ci=c-1
  myFunction((e.target as HTMLElement).classList, 1)} } id='b1' className=
    { 'a'+r+c+' z-10 shadow-medium self-center p-2 radius-large absolute whi' }
  variant="flat" color="default" radius="lg" size="sm">
<div style={{ zoom: 2 }}>+</div> Add design</Button>,

colmo = (r=0, c=2) => <Col xs lg="2" className="relative df w3 top justify-content-md-center">
<Card isFooterBlurred radius="lg" className="wh border-none"></Card>{ addes(r, c) }</Col>,

// open/x modal
myFunction = (c:any, o=0) => { tr = 'imodal'
  // console.log(e)
  for (let i = 0; i < c.length; i++) { if (c[i].match(/a\d/)) {
    // console.log(c[i])
  inp = c[i].substring(1); break } } a = document.querySelector("#"+tr)

  if (o) { a.classList.add('df'); const controller = new AbortController
  // User clicks anywhere outside of the modal, close
    window.addEventListener('click', (event) => {
    // console.log(event.target, "clicked")
    if ((event.target as HTMLElement).id == tr) { a.classList.remove('df'); controller.abort()
} }, { signal: controller.signal } ) } else a.classList.remove('df') },

inim = (e:any, h:any, o=0) => {
  // console.log('el:', e)
  parent = e.target
  while (parent.id.match(/c\d/) == null) { parent = parent.parentElement }
  // console.log('par:', parent)
  pd = parent.id
if (h == 'h') { parent.querySelector('#b1').style.display = o ? "none" : 'block' } },

relm = (rel:any, c = [''], m=0, h='h') => { container = document.createElement('div')
  if (c[0]) container.classList.add(...c)
  createRoot(container).render(rel)
  // console.log('c', container, Object.keys(container),
  if (m) container.addEventListener("mouseover", (e) => { changeBackground(e, h)})
return container },

changeBackground = (e:any, h:any, o=0) => {
  // console.log('tt:', e)
  parent = e.target
  while (parent.id.match(/r\d/) == null) { parent = parent.parentElement }
  // console.log('parent:', parent)
  pd = parent.id; if (h == 'h') {
    tog = document.querySelectorAll('#b1.' + pd +', #del.' + pd) as NodeListOf<HTMLElement>
    k = o ? "none" : 'block'
    tog.forEach((e:any) => {e.style.display = k})
} else if (h =='n') {
  (document.querySelector('#del.' + pd) as HTMLElement).style.display = o ? "none" : 'block'
  // console.log(h, (document.querySelector('#del.' + pd) as HTMLElement))
}
else document.querySelectorAll('#'+parent.id).forEach(e => e.remove()) },

os='On sale', ab = '-[calc(100%_-_8px)]',

imk = (k:any) => <Image key={k} alt="Woman" className="object-cover opacity-1" height={150}
width={150} src="https://cdn.pixabay.com/photo/2021/09/13/08/16/purple-flower-6620617_640.jpg"/>,

cfr = (t='', m=os, w=ab) => <CardFooter id='cfo' className=
  {( w==ab? 'foo':'bdf fon bgy absolute' )+" px-"+(t!=''?0:2)+
    " justify-center before:bg-white/10 border-white/20"+
    " overflow-hidden py-1 before:rounded-xl "+(w.match('top')?"":('bottom-'+(+(w==ab))))+" w"+w+
" ml-1 z-10" }><p id='mb0' className={t+( w==ab? '':'ort ' )+"text-tiny" }>{ m }</p></CardFooter>,

iml = {c:0, imc: [ imk(0), <div key='1' className='relative df'>
    <Col style={{ maxWidth: 'fit-content' }} className="justify-content-md-center">
      <Image style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
        borderTopRightRadius: 0
        }} alt="Woman" className="object-cover opacity-1" height={75} width={50} src=
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg"/>
      <Image style={{ borderTopLeftRadius: 0, borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          }} alt="Woman" className="object-cover opacity-1" height={75} width={50} src=
    "	https://cdn.pixabay.com/photo/2023/11/13/00/47/cactus-8384331_640.jpg"/></Col>
    <Col className="justify-content-md-center" style={{ width: 'fit-content' }}>
      <Image style={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0,
            }} alt="Woman" className="object-cover opacity-1" height={150} src=
"https://media.istockphoto.com/id/1454962497/photo/aerial-view-on-spring-fields.webp?b=1&s=612x612&w=0&k=20&c=0_xGf6EZu9oskMoXC5tODadRWmzWm6ZvJveUYCWmdBE="
  width={100} /></Col>{ cfr('', os, '50') }</div>,

  <div key='2' className='df'>
      <Col style={{ maxWidth: 'fit-content' }} className="justify-content-md-center">
        <Image style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
          borderTopRightRadius: 0
          }} alt="Woman" className="object-cover opacity-1" height={75} width={50} src=
          "https://cdn.pixabay.com/photo/2023/07/23/06/57/leaf-8144517_640.jpg"/>
        <Image style={{ borderTopLeftRadius: 0, borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            }} alt="Woman" className="object-cover opacity-1" height={75} width={50} src=
          "	https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_640.jpg"/></Col>
    <Col className="justify-content-md-center" style={{ width: 'fit-content' }}>
      <Image style={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0,
            }} alt="Woman" className="object-cover opacity-1" height={150} src=
  "https://cdn.pixabay.com/photo/2023/09/22/07/02/red-8268266_640.jpg" width={100}/></Col></div>,

  <div key='3' className='df'>
    <Col className="justify-content-md-center" style={{ width: 'fit-content' }}>
      <Image style={{ borderBottomRightRadius: 0, borderTopRightRadius: 0
        }} alt="Woman" className="object-cover opacity-1" height={150} src=
        "https://cdn.pixabay.com/photo/2024/06/21/08/21/hut-8843868_640.jpg" width={100}/>
    </Col><Col style={{ maxWidth: 'fit-content' }} className="justify-content-md-center">
        <Image style={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0,
          borderBottomRightRadius: 0
          }} alt="Woman" className="object-cover opacity-1" height={75} width={50} src=
          "https://cdn.pixabay.com/photo/2023/07/10/06/13/mountain-8117525_640.jpg"/>
      <Image style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0,
          borderTopRightRadius: 0,
          }} alt="Woman" className="object-cover opacity-1" height={75} width={50} src=
        "	https://cdn.pixabay.com/photo/2022/11/19/14/26/nature-7602212_640.jpg"/></Col>
</div>, imk(4) ]},

d2 = (n: any, m=os) => <div key={ n } className='df'>
  <Col style={{ maxWidth: 'fit-content' }} className="justify-content-md-center">
      <Image style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        }} alt="Woman" className="object-cover opacity-1" height={50} width={50} src=
"https://media.istockphoto.com/id/1534040386/photo/an-outdoor-bamboo-gazebo-nestled-amidst-lush-greenery-offering-serene-relaxation-after-a.webp?b=1&s=612x612&w=0&k=20&c=vuWY9Cw4TjBDhJLyMVL20Qm5gddDNQ3UmHATP_s2Xvw="
        />
      <Image style={{ borderRadius: 0
        }} alt="Woman" className="object-cover opacity-1" height={50} width={50} src=
        "https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326_640.jpg"
        />
    <Image style={{ borderTopLeftRadius: 0, borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        }} alt="Woman" className="object-cover opacity-1" height={50} width={50} src=
  "	https://cdn.pixabay.com/photo/2023/10/20/03/36/mushrooms-8328101_640.jpg"/></Col>
  <Col className="justify-content-md-center" style={{ width: 'fit-content' }}>
    <Image style={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0,
          }} alt="Woman" className="object-cover opacity-1" height={150} src=
      "https://cdn.pixabay.com/photo/2024/01/31/19/25/sunset-8544672_640.jpg"
width={100}/></Col>{ cfr('', m, '50 top-0') }</div>,

dict = { c: 1, imc: [ imk(0), d2(1), d2(2, 'New arrival'), d2(3), imk(4) ]},

sing = 'Single Image prduct - no discount',

cfo = [ [ sing, sing ], [ 'Multi Image - '+os, '4 Images - '+os ],
['Multi Image - new arr', '4 Image - new arrival'],
['Single Image - Left - No Discount', '4 Image - 0 discount'],
[ 'Single Image prduct', 'Single Image prduct' ] ],

card = (i: any, m=sing, t='', b: any) =>
  <Card isFooterBlurred radius="lg" className={ "relative w15 border-none" }>
<div className={ "df justify-content-md-center" }>{ i }{ b }</div>{ cfr(t, m) }</Card>,

imco = (i: any, im = iml, m=cfo[i][im.c]) => { if (i<5) {
  return <Col xs lg="2" className="h17 relative df top w3 justify-content-md-center">
    { card(im.imc[i], m, 'cut-text ', <Button id='b1' style={{ display: "none" }} className=
    {"r"+i+" c1 mwu z-10 self-center p-2 radius-large absolute"} variant="flat"
    color="default" radius="lg" size="sm"><svg fill="currentColor" width="20px" version="1.1"
      id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier"><g><path d=
      "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"
      ></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
></path></g></g></svg></Button>) }</Col>} else return colmo(i) },

arr = [ [ { id: 1, name: imco(0, dict) } ] ],

todo = (s='State', a='added', tr = document.querySelector("#topdo") ) => { sta=s; adde=a
tr?.classList.add('df'); setTimeout(() => { tr?.classList.remove('df')}, 1000 ) },

updateDarkMode = (m='light') => { let e=localStorage.getItem('mode'); console.log(e)
  if( (m!==e ) && ( ( m==='light' ) || ( e==='light' ) ) ) {
  let d=document.documentElement, c=d.classList
  c.toggle('dark') // update styles!
localStorage.setItem("mode", m) } } //save it in local storage

for (let i = 1; i < 5; i++) { arr[i] = [ { id: 1, name: imco(i, dict) } ] }
// console.log(arr)

export default function Home() {
  const [els, setels] = useState([
    <Card key='0' className="alc w90 justify-content-md-center"><div id='alsc'
      >{ buttonc('Image list Product Image 2') } { buttonc('is empty', greens) }</div><div id='alsc'
    >{ buttonc('and Discount %') }{ buttonc('is', greens) }{ buttonc(0) }</div></Card>,
   ...cele(el2) ]),

  [items, setItems] = useState([0, 1, 2, 3, 4]),
//   console.log(els)

  [artists, setArtists] = useState(arr), [name, setName] = useState([{ id: 1 }]),
  [isSelected, setIsSelected] = useState(true),

  Btn = ({ind=0}) =>  <Button id='adb' className='mwu atb cb'
    ><svg height="22" viewBox="8 0 8 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      className="lucide lucide-ellipsis-vertical">
        <circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>
    </svg><div className="StyledWidgetMenu--1ypwjps bYKxqt">
      <Button id='del' onClick={ () => { let arts = artists; nextId-=15
      artists.forEach((e:any) => { e.splice(ind, 1) // remove 1 item only
      } ); tr = document.querySelector('#scrw.r')
      // Variant"r"+i+
      tr?.append(relm(<Col xs lg="2" className="df justify-content-md-center"
        style={{ width: '100%' }}>
          <Card id='fg1' isFooterBlurred radius="lg" className="br2 cb p-1 border-none"
      >Variant { co+1 }</Card></Col>, ['w3', 'df', 'top'] ) )
      // console.log(b, relm(k))
      setArtists(arts); todo('Variant', 'removed!') } }
        className={" mwu self-center"} style={{ paddingLeft: 'calc(var(--bs-gutter-x) /4) !important',
          borderRadius: '2px', paddingRight: 'calc(var(--bs-gutter-x) /4) !important' }}>
            <svg id='sdel' className="feather feather-x-circle" stroke="currentColor"
              fill="currentColor"
          stroke-width="0" viewBox="0 0 24 24" width="20"><title>Remove</title><g id="Trash"><g><path d=
      "M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"
        ></path><path d="M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z"></path><path d=
        "M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z"></path></g></g></svg></Button>
            {/* <button className="StyledWidgetButton--1ytyc6t huXTum">
        <div className="StyledWidgetIcon--zmmuun lfkHx">
          <svg width="24" height="24"><g transform="translate(6, 3)">
            <path d="M1.07692 2.68695V11.313C1.07692 12.2029 1.79732 12.9231 2.68695 12.9231H11.313C12.2029 12.9231 12.9231 12.2027 12.9231 11.313V2.68695C12.9231 1.79706 12.2027 1.07692 11.313 1.07692H2.68695C1.79706 1.07692 1.07692 1.79732 1.07692 2.68695ZM0 2.68695C0 1.20264 1.2022 0 2.68695 0H11.313C12.7974 0 14 1.2022 14 2.68695V11.313C14 12.7974 12.7978 14 11.313 14H2.68695C1.20264 14 0 12.7978 0 11.313V2.68695Z"
            fill-rule="evenodd"></path><path d="M4.66732 6.41683H6.41732V4.66683C6.41732 4.34483 6.67865 4.0835 7.00065 4.0835C7.32265 4.0835 7.58398 4.34483 7.58398 4.66683V6.41683H9.33398C9.65598 6.41683 9.91732 6.67816 9.91732 7.00016C9.91732 7.32216 9.65598 7.5835 9.33398 7.5835H7.58398V9.3335C7.58398 9.6555 7.32265 9.91683 7.00065 9.91683C6.67865 9.91683 6.41732 9.6555 6.41732 9.3335V7.5835H4.66732C4.34532 7.5835 4.08398 7.32216 4.08398 7.00016C4.08398 6.67816 4.34532 6.41683 4.66732 6.41683Z"
          fill-rule="evenodd"></path></g></svg></div><span className="StyledSpan--pw4ua5 jbDPka"
    >Add site</span></button> */}
  </div></Button>,

  rows = (i=0) => <Row id='scrw' className={ 'r'+i+' h17 ac' } style={{ width: nextId+'vw' }}
    >{ imco(i) }<ul className='df fon px-0'>
    { name.map(art => <li key={art.id}>{ artists[i][art.id-1].name }</li> ) }</ul>

    <div className='p-0 h17 fon flex'><Button id="addc" onClick={ () => { let arts = artists; nextId+=15
      artists.forEach((e:any, idx:any) => { arts[idx] = [ ...e,
      { id: co, name: colmo(idx, co) } ] } ); tr = document.querySelector('#scrw.r')
      // Variant
      tr?.append(relm(<Col xs lg="2" className="df justify-content-md-center"
        style={{ width: '100%' }}>
          <Card id='fg1' isFooterBlurred radius="lg" className="br2 cb p-1 border-none"
      >Variant { co+1 }</Card><Btn ind={co}/></Col>, ['w3', 'df', 'top'] ) )
      setName([...name, {id: co}]); co++; setArtists(arts); todo('Variant')
      // console.log(artists)
  } } className={ 'r'+i+" cb mwu h-auto fon shadow-medium self-center" }>+</Button></div></Row>,

  btn = (r=0, c=0) => <Button id='b1' onClick={ (e: any) => { arr=artists
    arr[ri][ci].name=imco(r,c?dict:iml); setArtists(arr); const nextShapes = name.map(shape => {
      if (shape.id === ci) {
        // No change
        return shape;
      } else {
        // Return a new circle 50px below + 50
        return {
          ...shape,
          id: shape.id,
        };
      }
    })
    // bg-white/50 console.log(nextShapes)
    // Re-render with the new array
    setName(nextShapes); let cl=(e.target as HTMLElement).classList
    for (let i = 0; i < cl.length; i++) { if (cl[i].match(/m\d/)) {
    console.log(cl[i], 'inp: ', inp, ri, ci, artists, r,c)
    // document.querySelector('.c'+inp)?.replaceWith(relm(imco(+cl[i][1], +cl[i][2]?dict:iml),
    //     ['pl0', 'w3', 'df']) )
    myFunction([''], 0); break } } todo('Variant', 'template updated') } } style={{ display: "none" }}
    className= { 'm'+r+c+" c1 z-10 self-center p-2 radius-large absolute" } variant="flat"
  color="default" radius="lg" size="sm">Insert</Button>,

  modc = (i=iml, r=0, w=3, s=cfo[r][i.c]) => { let p=w==3
    return <Col id='c1' xs lg="2" onMouseEnter={ (e: any) => inim(e, 'h') }
      onMouseLeave={ (e: any) => inim(e, 'h', 1) } className={ p?'':'pr0 '+"relative flex w"+w+
  " pb-2 justify-content-md-center" }>{ card(i.imc[r], s, p?'cut-text ':'', btn(r, i.c)) }</Col> },

  // r el
  relem = (i=0, isDragged: any, c: any, index: any) => {
    // console.log(c)
    return <Row id={'r'+i}  onMouseEnter={ (e: any) => changeBackground(e, 'h') }
      onMouseLeave={ (e: any) => changeBackground(e, 'h', 1) } className="h21">

        <Col id='w8v' xs lg="2" className='h17 alc top df fd'>
          <Row style={{ height: '25%' }} className="justify-content-md-center">
            <Col className="justify-content-md-center" style={{ alignContent: 'end',
              display: 'grid' }}>
              <Button id='del' onClick={ () => { setItems( typeof index !== "undefined"
                ? arrayRemove(items, index) : items ); todo('State', 'removed!') } }
                className={"r"+i+" mwu self-center"} style={{ display: "none",
                paddingLeft: 'calc(var(--bs-gutter-x) /4) !important', borderRadius: '2px',
                paddingRight: 'calc(var(--bs-gutter-x) /4) !important' }}>
            <svg id='sdel' className="feather feather-x-circle" stroke="currentColor"
              fill="currentColor"
          stroke-width="0" viewBox="0 0 24 24" width="20"><title>Remove</title><g id="Trash"><g><path d=
        "M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"
          ></path><path d="M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z"></path><path d=
          "M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z"></path></g></g></svg></Button></Col>
          </Row><Row style={{ flexGrow:.5 }}><Col id='req' className="df justify-content-md-center"
        style={{ blockSize: 'fit-content' }}>
        <p className='p5' style={{ marginBottom: 0, zoom: '2'}}>{i+1}</p>
        <button data-movable-handle className={"r"+i+" self-center"}
        style={{ border: "none", margin: 0, padding: 0, width: "auto", overflow: "visible",
        background: "transparent", cursor: isDragged ? "grabbing" : "grab" }} tabIndex={-1}>
        <HandleIcon/></button></Col></Row></Col>

        <Col id='crd' xs lg="4" className='h17 alc top'>
        <Card className="h10 top justify-content-md-center" radius="lg">{ c }</Card></Col>

      <ScrollSyncPane><div className='df fd example' style={{ ...cnr }}>{ rows(i) }
  </div></ScrollSyncPane></Row> },

  rem = (e: any) => {
    // console.log('el', e.target)
  let el = e.currentTarget as HTMLElement, dat = 'data-pressed'; el.removeAttribute(dat) },

  input = (e: any) => { var filter = e.target?.value.toUpperCase(), a, txtValue
    document.querySelectorAll('#c1').forEach((el: any) => { a = el.querySelector("p:not(.ort)")
      txtValue = a.textContent || a.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) { el.classList.replace('d-none', "flex")
    } else { el.classList.replace("flex", 'd-none')
    // console.log(el, a, txtValue, filter)
  } } ) },

  List2 = () => // @ts-ignore
    <List values={items} onChange={({ oldIndex, newIndex }) =>
      setItems(arrayMove(items, oldIndex, newIndex)) } renderList={(props: { children: React.ReactNode;
        isDragged: boolean; props: { ref: React.RefObject<any> } }) => <ul
        {...props.props} style={{ padding: "0em 0em 1em 0em",
          cursor: props.isDragged ? "grabbing" : "inherit" }}>{props.children}</ul> }

      renderItem={(params: { value: any; index?: number;
        isDragged: boolean;
        isSelected: boolean;
        props: {
          key?: number;
          tabIndex?: number;
          "aria-roledescription"?: string;
          onKeyDown?: (e: React.KeyboardEvent) => void;
          onWheel?: (e: React.WheelEvent) => void;
          style?: React.CSSProperties;
          ref?: React.RefObject<any> }
      }) => {
        // console.log(value)
        return <li id='lst' className="par" {...params.props} key={params.props.key}
          style={{ ...params.props.style,
          cursor: params.isDragged ? "grabbing" : "inherit",
          backgroundColor: params.isDragged || isSelected ? "#EEE" : "#FFF",
  }}>{ relem(params.value, params.isDragged, els[params.value], params.index) }</li> }}/>
  {/* Mark any node with the data-movable-handle attribute if you wish
    to use is it as a DnD handle. The rest of renderItem will be then
  ignored and not start the drag and drop.*/}

  useEffect(() => { let e = localStorage.getItem('mode'),
    q = document.querySelector<HTMLInputElement>(`[value=${e}]`); if (q) q.checked=!0
  }, [] ) // ✅ no dependency

  return <div>
    <div style={{ width: '4rem' }} className={
      "p-3 h-screen bg-black z-20 fixed top-0 -left-96 lg:left-0 peer-focus:left-0 peer:transition"+
      " ease-out delay-150 duration-200"}>
      <div className="flex-col justify-start item-center"><div className="my-4"><div className=
        {"flex rounded-md mb-8 justify-start items-center gap-4 hover:bg-gray-900 group"+
        " cursor-pointer hover:shadow-lg"}>
          <svg viewBox="0 0 45 45" fill="none" id="svg-230198041_977">
            <g mask="url(#svg-230198041_977_mask0_18594_7116)"><path d=
              "M22.6407 0.822266V22.8675L13.0248 13.2486C12.1316 12.3479 11.6276 11.1326 11.6211 9.86415V0.822266H22.6407Z"
            fill="#04AE56"/><path d=
            "M44.6895 22.8676H22.6367L32.2632 13.2487C32.7118 12.7956 33.2473 12.4378 33.8374 12.1966C34.4276 11.9554 35.0604 11.8358 35.6979 11.845H44.7367L44.6865 22.8676H44.6895Z" fill="#04AE56"/>
            <path d=
        "M22.6407 44.9112V22.866L32.255 32.497C32.7087 32.9455 33.067 33.4811 33.3082 34.0716C33.5495 34.6621 33.6687 35.2954 33.6587 35.9332V44.9736L22.6407 44.9112ZM0.601562 22.8675H22.6407L13.0248 32.4849C12.1266 33.3831 10.9086 33.8886 9.6404 33.8886H0.601562V22.866V22.8675Z" fill="#04AE56"/>
        </g></svg></div><div className=
  "flex  mb-8 justify-start items-center gap-4 hover:bg-gray-900 rounded-md group cursor-pointer hover:shadow-lg">
              <svg fill="white" width="40px" version="1.1" id="Capa_1" viewBox="0 0 489.4 489.4" xmlSpace="preserve">
            <g> <g> <path 
                d="M0,437.8c0,28.5,23.2,51.6,51.6,51.6h386.2c28.5,0,51.6-23.2,51.6-51.6V51.6c0-28.5-23.2-51.6-51.6-51.6H51.6    C23.1,0,0,23.2,0,51.6C0,51.6,0,437.8,0,437.8z M437.8,464.9H51.6c-14.9,0-27.1-12.2-27.1-27.1v-64.5l92.8-92.8l79.3,79.3    c4.8,4.8,12.5,4.8,17.3,0l143.2-143.2l107.8,107.8v113.4C464.9,452.7,452.7,464.9,437.8,464.9z M51.6,24.5h386.2    c14.9,0,27.1,12.2,27.1,27.1v238.1l-99.2-99.1c-4.8-4.8-12.5-4.8-17.3,0L205.2,333.8l-79.3-79.3c-4.8-4.8-12.5-4.8-17.3,0    l-84.1,84.1v-287C24.5,36.7,36.7,24.5,51.6,24.5z"/>
                <path 
                d="M151.7,196.1c34.4,0,62.3-28,62.3-62.3s-28-62.3-62.3-62.3s-62.3,28-62.3,62.3S117.3,196.1,151.7,196.1z M151.7,96    c20.9,0,37.8,17,37.8,37.8s-17,37.8-37.8,37.8s-37.8-17-37.8-37.8S130.8,96,151.7,96z" transform="translate(-36 0)"/>
              </g> </g> </svg> </div> <div className=
                          "flex  mb-8 justify-start items-center gap-4 hover:bg-gray-900 rounded-md group cursor-pointer hover:shadow-lg">
                          <svg viewBox="0 0 30 20"> <desc>Logo of Meta</desc>
            <g transform="scale(0.1)" fill='white'> <path id="Logo0" 
            d="m31.06,125.96c0,10.98 2.41,19.41 5.56,24.51 4.13,6.68 10.29,9.51 16.57,9.51 8.1,0 15.51-2.01 29.79-21.76 11.44-15.83 24.92-38.05 33.99-51.98l15.36-23.6c10.67-16.39 23.02-34.61 37.18-46.96 11.56-10.08 24.03-15.68 36.58-15.68 21.07,0 41.14,12.21 56.5,35.11 16.81,25.08 24.97,56.67 24.97,89.27 0,19.38-3.82,33.62-10.32,44.87-6.28,10.88-18.52,21.75-39.11,21.75l0-31.02c17.63,0 22.03-16.2 22.03-34.74 0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16.05c-18.2,32.27-22.81,39.62-31.91,51.75-15.95,21.24-29.57,29.29-47.5,29.29-21.27,0-34.72-9.21-43.05-23.09-6.8-11.31-10.14-26.15-10.14-43.06z"/>
            <path id="Logo1" 
            d="m24.49,37.3c14.24-21.95 34.79-37.3 58.36-37.3 13.65,0 27.22,4.04 41.39,15.61 15.5,12.65 32.02,33.48 52.63,67.81l7.39,12.32c17.84,29.72 27.99,45.01 33.93,52.22 7.64,9.26 12.99,12.02 19.94,12.02 17.63,0 22.03-16.2 22.03-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87-6.28,10.88-18.52,21.75-39.11,21.75-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71l-25.79-43.08c-12.94-21.62-24.81-37.74-31.68-45.04-7.39-7.85-16.89-17.33-32.05-17.33-12.27,0-22.69,8.61-31.41,21.78z"/>
            <path id="Logo2" 
            d="m82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78-12.33,18.61-19.88,46.33-19.88,72.95 0,10.98 2.41,19.41 5.56,24.51l-26.48,17.44c-6.8-11.31-10.14-26.15-10.14-43.06 0-30.75 8.44-62.8 24.49-87.55 14.24-21.95 34.79-37.3 58.36-37.3z"/>
            </g>
            </svg></div>

              <div className=
              "flex justify-start items-center gap-4 pl-1 hover:bg-gray-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <svg width="98" viewBox="0 0 208 173.7" role="img"><title>Shopify</title>
                <path fill="white" d="M130.7 32.9c-.1-.9-.9-1.3-1.5-1.4-.6-.1-12.6-.2-12.6-.2s-10.1-9.8-11.1-10.8-2.9-.7-3.7-.5c0 0-1.9.6-5.1 1.6-.5-1.7-1.3-3.8-2.4-5.9-3.6-6.9-8.8-10.5-15.2-10.5-.4 0-.9 0-1.3.1-.2-.2-.4-.4-.6-.7-2.8-3-6.3-4.4-10.5-4.3-8.2.2-16.3 6.1-23 16.7-4.7 7.4-8.2 16.7-9.2 23.9-9.4 2.9-16 4.9-16.1 5-4.7 1.5-4.9 1.6-5.5 6.1C12.4 55.3 0 151.4 0 151.4l104.1 18 45.1-11.2S130.8 33.7 130.7 32.9zm-39.2-9.7c-2.4.7-5.1 1.6-8.1 2.5-.1-4.1-.6-9.9-2.5-14.9 6.3 1.2 9.3 8.2 10.6 12.4zM78 27.4c-5.5 1.7-11.4 3.5-17.4 5.4 1.7-6.4 4.9-12.8 8.8-17 1.5-1.6 3.5-3.3 5.9-4.3 2.3 4.7 2.7 11.4 2.7 15.9zM66.8 5.8c1.9 0 3.5.4 4.9 1.3-2.2 1.1-4.4 2.8-6.4 5-5.2 5.6-9.2 14.2-10.8 22.6-5 1.5-9.8 3-14.3 4.4 3-13.2 14-32.9 26.6-33.3z"></path>
                <path fill="white" d="M129.2 31.5c-.6-.1-12.6-.2-12.6-.2s-10.1-9.8-11.1-10.8c-.4-.4-.9-.6-1.4-.6v149.5l45.1-11.2S130.8 33.8 130.7 32.9c-.2-.9-.9-1.3-1.5-1.4z"></path>
                <path fill="black" d="M79.1 54.7l-5.2 19.6s-5.8-2.7-12.8-2.2c-10.2.6-10.3 7-10.2 8.7.6 8.8 23.6 10.7 24.9 31.2 1 16.2-8.6 27.2-22.4 28.1-16.6 1-25.7-8.7-25.7-8.7l3.5-14.9s9.2 6.9 16.5 6.5c4.8-.3 6.5-4.2 6.3-7-.7-11.4-19.5-10.8-20.7-29.5-1-15.8 9.4-31.8 32.3-33.3 9-.8 13.5 1.5 13.5 1.5z"></path>
                </svg>
              </div></div>
            <div className="my-4 pb-4" style={{position: 'absolute', bottom: '0'}}>
              <div className=
              "flex mb-2 justify-start items-center gap-4 pl-1 hover:bg-gray-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <svg className="text-2xl fill-white" stroke="currentColor" fill="currentColor"
                  stroke-width="0" viewBox="0 0 24 24"
                  height="20px"><path fill="none" d="M0 0h24v24H0V0z"></path><path d=
                  "M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                ></path></svg>
    </div></div></div></div>

    <div style={{ marginBottom: '4%', marginLeft: '6rem', marginTop: '2rem' }} className="framer"
    data-framer-name="Fuel your Brand's Growth with Personalized Dynamic Creatives"
    data-framer-component-type="RichTextContainer">
    <p className="framer-text" style={{ zoom: '2' }}>
      <svg style={{ display: 'inline-block', marginRight: '1rem' }}
        stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
        aria-hidden="true" height="20px"><path fill-rule="evenodd" d=
          "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
      clip-rule="evenodd"></path></svg>
        <span style={{ width: '30%', display: 'inline-block', borderBottom: '1px solid #eee' }}
    >Rules space</span></p></div>

    <Button id='gre' className="p-3 self-center absolute" variant="flat" color="default"
    >Publish Feed</Button>

    <ScrollSync><Container id='lis' style={{ maxWidth: '88vw' }} className="pb-5 cnr rounded-large">
      <ul id='mb0' className="pl0"><li className="par" style={{ listStyleType: "none" }}>
        <Row id='rt' style={{ marginBottom: 'calc(2 * var(--bs-gutter-x))' }}>
          <Col xs lg="2" id='w8v' className="top"></Col>
          <Col xs lg="4" id='crd' className="df top" style={{ justifyContent: 'center' }}>
            <Card style={ { boxShadow: 'none', paddingLeft: '3% !important',
              paddingRight: '3% !important', justifyContent: 'center' } }
          isFooterBlurred radius="lg" className="br2 cb p-1 border-none">Product Filter</Card></Col>

          <ScrollSyncPane><div className='example' style={{ ...cnr }}>
            <Row id='scrw' className='ac r' style={{ width: nextId+'vw' }}>
              <Col xs lg="2" className="df w3 justify-content-md-center"><Card id='fg1'
                isFooterBlurred radius="lg" className="top br2 cb p-1 border-none">Primary Variant</Card>
              <Btn/></Col><Col xs lg="2" className="top df w3 justify-content-md-center">
                  <Card id='fg1'
                  isFooterBlurred radius="lg" className="br2 cb p-1 border-none">Variant 2</Card>
      <Btn ind={1}/></Col></Row></div></ScrollSyncPane></Row></li></ul>{ List2() }

      <ul id='mb0' className="pl0"><li className="par" style={{ listStyleType: "none" }}>
      <Row><Col id='w8v' xs lg="2" className='df fd'><Button id='btnr'
        onClick={ () => { tr = document.querySelector(".ar")
          tr?.classList.remove('d-none'); setTimeout(() => { tr?.classList.add('d-none') }, 1000)
          const il = items.length; cfo = [...cfo, ['+ Add design', '+ Add design']]
          setels([ ...els, <Card key={il} className="alc w90 justify-content-md-center"
          >{ buttonc('+ Add Product Filters', 'alc fon') }</Card> ])
          let tem = [ { id: 1, name: colmo(p, 1) } ]
          // console.log(els)
          for (let i = 1; i < co; i++) { tem[i-1] = { id: i, name: colmo(p, i) } }
          setArtists([...artists, tem])
          setItems([...items, il]); todo() } } className="mwu h-auto shadow-medium self-center" style={{
        paddingLeft: 'calc(var(--bs-gutter-x) /4) !important', borderRadius: '2px', zoom: '2',
        paddingRight: 'calc(var(--bs-gutter-x) /4) !important' }}>+
          <svg id='star' className='cb ar w-50 d-none absolute' viewBox="-50 -50 100 100"><defs>
          <circle id="c" r="40" stroke-width="20" fill="none" stroke-dasharray="62.75 188.25"></circle>
        </defs><use xlinkHref="#c" stroke="#04AE56" stroke-dashoffset="219.625"></use></svg></Button>
      </Col><Col id='crd' xs lg="4"></Col><div className='example' style={{ ...cnr }}></div></Row></li>
    </ul></Container></ScrollSync>

    <p className="framer-text" style={{  marginLeft: '6rem' }}>
      <span style={{ zoom: 2, width: '30%', display: 'inline-block' }}
    >Design for remaining SKU's</span>

    <label data-selected='true'
      onMouseLeave={ rem } onMouseUp={ rem } onMouseDown={ (e) => {
      console.log('el', e.target)
        let el = e.currentTarget as HTMLElement, dat = 'data-pressed'
        el.setAttribute(dat, "true") } } onClick={ (e) => { console.log('el', e.target)
        let el = e.currentTarget as HTMLElement, dat = 'data-selected'
        // console.log(el)
      if ((e.target as HTMLElement).tagName == 'INPUT') { el.hasAttribute(dat) ? el.removeAttribute(dat) :
        el.setAttribute(dat, "true"), setIsSelected(!isSelected) } } }
      aria-label="Automatic updates" className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none tap-highlight-transparent"
      ><span id='spa'>
        <input defaultChecked={ true } aria-labelledby=":R4mfja:" type="checkbox" role="switch"/>
      </span>
      <span aria-hidden="true" className="px-1 relative inline-flex items-center justify-start flex-shrink-0 overflow-hidden rounded-full outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background group-data-[selected=true]:bg-success group-data-[selected=true]:text-success-foreground w-12 h-7 mr-2 rtl:ml-2 rtl:mr-[unset] transition-background">
        <span id='swi' className="z-10 flex items-center justify-center shadow-small rounded-full origin-right w-5 h-5 text-small group-data-[selected=true]:ml-5 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-5 transition-all group-data-[pressed=true]:w-6 group-data-[selected]:group-data-[pressed]:ml-4">
    </span></span></label></p>

    <Container id='NA' style={{ paddingTop: 'calc(var(--bs-gutter-x) * 2)',
      marginLeft: 'calc(var(--bs-gutter-x) * 4)', maxWidth: '1200px', paddingRight: '60px',
      marginTop: 'calc(var(--bs-gutter-x) * .5)', display: 'inline-block' }}
      className={ ( isSelected ? '' : 'd-none ') + "rounded-large"}>

      <Row id='scrw' className="pb-9"><Col xs lg="7" className="top">
        <Card className="h10 justify-content-md-center" style={{ textAlign: 'center',
        }} radius="lg">N/A</Card></Col>

      <Col xs lg="2" className="df justify-content-md-center">
        <Card id='fbk' isFooterBlurred radius="lg" className="border-none">
          <div className="df" style={{ height: '150px', width: '150px',
            justifyContent: 'flex-start !important' }}>
            <Col style={{ maxWidth: 'fit-content' }} className="justify-content-md-center">
              <Image style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
                borderTopRightRadius: 0
                }} alt="Woman" className="object-cover opacity-1" height={75} width={50} src=
                "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg"/>
              <Image style={{ borderTopLeftRadius: 0, borderBottomRightRadius: 0,
                  borderTopRightRadius: 0,
                  }} alt="Woman" className="object-cover opacity-1" height={75} width={50} src=
            "https://cdn.pixabay.com/photo/2023/11/13/00/47/cactus-8384331_640.jpg"/></Col>
          <Col className="justify-content-md-center" style={{ width: 'fit-content' }}>
            <Image style={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0,
                  }} alt="Woman" className="object-cover opacity-1" height={150} src=
  "https://media.istockphoto.com/id/1454962497/photo/aerial-view-on-spring-fields.webp?b=1&s=612x612&w=0&k=20&c=0_xGf6EZu9oskMoXC5tODadRWmzWm6ZvJveUYCWmdBE="
          width={100} /></Col></div>
          <CardFooter style={{ paddingLeft: '0 !important',
            paddingRight: '0 !important', borderBottomRightRadius: 'var(--nextui-radius-large)',
            borderBottomLeftRadius: 'var(--nextui-radius-large)' }} className=
  "foo justify-center before:bg-white/10 overflow-hidden py-1 before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10">
      <p className="text-tiny" style={{ marginBottom: 0 }}
        >Multi Image - fallback</p></CardFooter></Card><Button id='b1' style={{ zIndex: 0 }} className=
          "self-center p-2 radius-large absolute bg-white/20" variant="flat"
          color="default" radius="lg" size="sm">
            <svg fill="#000" width="20px" version="1.1"
              id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <path d=
          "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
      ></path></g></g></svg></Button></Col>

      <Col xs lg="2" className="df bl justify-content-md-center">
        <Card id='fbk' isFooterBlurred radius="lg" className="border-none">
          <div className="df" style={{ height: '150px', width: '150px',
            justifyContent: 'flex-start !important' }}>
            <Col style={{ maxWidth: 'fit-content' }} className="justify-content-md-center">
                <Image style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
                  borderTopRightRadius: 0,
                  }} alt="Woman" className="object-cover opacity-1" height={50} width={50} src=
  "https://media.istockphoto.com/id/1534040386/photo/an-outdoor-bamboo-gazebo-nestled-amidst-lush-greenery-offering-serene-relaxation-after-a.webp?b=1&s=612x612&w=0&k=20&c=vuWY9Cw4TjBDhJLyMVL20Qm5gddDNQ3UmHATP_s2Xvw="
                  />
                <Image style={{ borderRadius: 0
                  }} alt="Woman" className="object-cover opacity-1" height={50} width={50} src=
                  "https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326_640.jpg"
                  />
              <Image style={{ borderTopLeftRadius: 0, borderBottomRightRadius: 0,
                  borderTopRightRadius: 0,
                  }} alt="Woman" className="object-cover opacity-1" height={50} width={50} src=
                "	https://cdn.pixabay.com/photo/2023/10/20/03/36/mushrooms-8328101_640.jpg"/></Col>
          <Col className="justify-content-md-center" style={{ width: 'fit-content' }}>
            <Image style={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0,
                  }} alt="Woman" className="object-cover opacity-1" height={150} src=
              "https://cdn.pixabay.com/photo/2024/01/31/19/25/sunset-8544672_640.jpg"
          width={100} /></Col></div>
          <CardFooter style={{ paddingTop: '4px !important', paddingBottom: '0 !important',
            paddingLeft: '0 !important',
            paddingRight: '0 !important', borderBottomRightRadius: 'var(--nextui-radius-large)',
            borderBottomLeftRadius: 'var(--nextui-radius-large)' }} className=
  "foo justify-center before:bg-white/10 overflow-hidden before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10"
            ><p className="text-tiny" style={{ marginBottom: 0 }}>4 Image - fallback</p>
            </CardFooter></Card><Button id='b1' style={{ zIndex: 0 }} className=
          "self-center p-2 radius-large absolute bg-white/20" variant="flat"
          color="default" radius="lg" size="sm">
            <svg fill="#000" width="20px" version="1.1"
              id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <path d=
          "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
    ></path></g></g></svg></Button></Col></Row></Container>

    <footer className="footer" data-version="v1" data-variant="elevated">
      <nav aria-label="Vercel Directory"><div className="statusRow">
        <fieldset className="tailwind root" data-small="">
          <legend className="sr-only">Select a display theme:</legend><span>
            <input aria-label="system" id="theme-switch-system-:R2jcj9am:" type="radio" value="system"
            name="state"
            />
              <label onClick={ () => updateDarkMode('system') } htmlFor="theme-switch-system-:R2jcj9am:">
                <span className="sr-only">system</span>
                <svg data-testid="geist-icon" height="16" stroke-linejoin="round"
                  viewBox="0 0 16 16" width="16">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 3.25C0.5 1.45507 1.95507 0 3.75 0H8.25C10.0449 0 11.5 1.45507 11.5 3.25V11.25V12H10.75H1.25H0.5V11.25V3.25ZM3.75 1.5C2.7835 1.5 2 2.2835 2 3.25V10.5H10V3.25C10 2.2835 9.2165 1.5 8.25 1.5H3.75ZM3 3.5C3 2.94772 3.44772 2.5 4 2.5H8C8.55228 2.5 9 2.94772 9 3.5V7H3V3.5ZM6.5 9.5H9V8H6.5V9.5Z"
                fill="currentColor" transform="translate(2.5, 2)"></path></svg></label></span><span>

            <input name="state" aria-label="light"
              id="theme-switch-light-:R2jcj9am:" type="radio" value="light"/>
            <label onClick={ () => updateDarkMode() } htmlFor="theme-switch-light-:R2jcj9am:">
              <span className="sr-only">light</span>
            <svg data-testid="geist-icon" height="16" stroke-linejoin="round"
              viewBox="0 0 16 16" width="16">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 1V0.25H6.25V1V1.25V2H7.75V1.25V1ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9ZM7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5ZM7.75 12V12.75V13V13.75H6.25V13V12.75V12H7.75ZM12 6.25H12.75H13H13.75V7.75H13H12.75H12V6.25ZM1 6.25H0.25V7.75H1H1.25H2V6.25H1.25H1ZM10.0052 2.93414L10.5355 2.40381L10.7123 2.22703L11.2426 1.6967L12.3033 2.75736L11.773 3.28769L11.5962 3.46447L11.0659 3.9948L10.0052 2.93414ZM2.22703 10.7123L1.6967 11.2426L2.75736 12.3033L3.28769 11.773L3.46447 11.5962L3.9948 11.0659L2.93414 10.0052L2.40381 10.5355L2.22703 10.7123ZM2.93414 3.9948L2.40381 3.46447L2.22703 3.28769L1.6967 2.75736L2.75736 1.6967L3.28769 2.22703L3.46447 2.40381L3.9948 2.93414L2.93414 3.9948ZM10.7123 11.773L11.2426 12.3033L12.3033 11.2426L11.773 10.7123L11.5962 10.5355L11.0659 10.0052L10.0052 11.0659L10.5355 11.5962L10.7123 11.773Z"
            fill="currentColor" transform="translate(1.25, 1.25)"></path></svg></label></span><span>

            <input name="state" aria-label="dark"
            id="theme-switch-dark-:R2jcj9am:" type="radio" value="dark"/>
            <label onClick={ () => updateDarkMode('dark') } htmlFor="theme-switch-dark-:R2jcj9am:">
              <span className="sr-only">dark</span>
            <svg data-testid="geist-icon" height="16" stroke-linejoin="round"
            viewBox="0 0 16 16" width="16">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 0.25V1V1.5H11L11.75 1.5V3H11H10.5V3.5V4.25H9V3.5V3H8.5H7.75V1.5H8.5H9V1V0.25H10.5ZM3.25514 2.75496C2.33413 3.53491 1.75 4.69972 1.75 6C1.75 8.34721 3.65279 10.25 6 10.25C7.30029 10.25 8.4651 9.66587 9.24505 8.74485C9.16377 8.74827 9.08207 8.74999 9 8.74999C5.82436 8.74999 3.25 6.17563 3.25 2.99999C3.25 2.91792 3.25172 2.83623 3.25514 2.75496ZM0.25 6C0.25 3.51072 1.83142 1.39271 4.042 0.592193L5.00256 1.55275C4.83933 2.00347 4.75 2.49047 4.75 2.99999C4.75 5.3472 6.65279 7.24999 9 7.24999C9.50953 7.24999 9.99653 7.16065 10.4473 6.99743L11.4078 7.95798C10.6073 10.1686 8.48929 11.75 6 11.75C2.82436 11.75 0.25 9.17564 0.25 6Z"
        fill="currentColor" transform="translate(2.25, 2.25)"></path></svg></label></span></fieldset>
    </div></nav></footer>

    <div id="topdo" className="h-auto bun pt-4 modal">
      <div id="imodal-content" className="flex-row fon p-2 modal-content"
        style={{ justifyContent: 'center' }}
    ><svg className='mr-2' version="1.1" id="Capa_1" width="25px"
      viewBox="0 0 305.002 305.002" xmlSpace="preserve">
        <circle r="150" cx="150" cy="150" fill="green"/>
        <path d="M218.473,93.97l-90.546,90.547l-41.398-41.398c-4.882-4.881-12.796-4.881-17.678,0c-4.881,4.882-4.881,12.796,0,17.678    l50.237,50.237c2.441,2.44,5.64,3.661,8.839,3.661c3.199,0,6.398-1.221,8.839-3.661l99.385-99.385    c4.881-4.882,4.881-12.796,0-17.678C231.269,89.089,223.354,89.089,218.473,93.97z"/>
        <rect id='wid' height="150" y="80" rx="20" ry="20" fill="green"/>
    </svg>{ sta } { adde }</div></div>

    <div id="imodal" className="modal modalp">
      <div id="imodal-content" className="modal-content" style={{ justifyContent: 'center' }}>
         <div style={{ justifyContent: 'space-between' }} className=
          { "pb-4 border-bottom flex mb-8 justify-start items-center gap-4 rounded-md"+
            " group] hover:shadow-lg" }>
          <div className='overflow-auto w-50 relative'><div id='bo7' className=
            'border p-3 fon'><div id='bo5' className= 'border p-3 fon'><Button id='bor' className=
                'h-auto border z-10 shadow-medium self-center p-4 radius-large'
                  variant="flat" color="default" radius="lg" size="sm">
              <svg fill="#04AE56" width="40px" version="1.1" id="Capa_1" viewBox="0 0 489.4 489.4"
                xmlSpace="preserve"><g><g><path d=
    "M0,437.8c0,28.5,23.2,51.6,51.6,51.6h386.2c28.5,0,51.6-23.2,51.6-51.6V51.6c0-28.5-23.2-51.6-51.6-51.6H51.6    C23.1,0,0,23.2,0,51.6C0,51.6,0,437.8,0,437.8z M437.8,464.9H51.6c-14.9,0-27.1-12.2-27.1-27.1v-64.5l92.8-92.8l79.3,79.3    c4.8,4.8,12.5,4.8,17.3,0l143.2-143.2l107.8,107.8v113.4C464.9,452.7,452.7,464.9,437.8,464.9z M51.6,24.5h386.2    c14.9,0,27.1,12.2,27.1,27.1v238.1l-99.2-99.1c-4.8-4.8-12.5-4.8-17.3,0L205.2,333.8l-79.3-79.3c-4.8-4.8-12.5-4.8-17.3,0    l-84.1,84.1v-287C24.5,36.7,36.7,24.5,51.6,24.5z"/>
              <path d=
    "M151.7,196.1c34.4,0,62.3-28,62.3-62.3s-28-62.3-62.3-62.3s-62.3,28-62.3,62.3S117.3,196.1,151.7,196.1z M151.7,96    c20.9,0,37.8,17,37.8,37.8s-17,37.8-37.8,37.8s-37.8-17-37.8-37.8S130.8,96,151.7,96z" transform="translate(-36 0)"/>
          </g></g></svg></Button></div></div><p id='fon' className='absolute'
          >Select a design to link</p></div>
        <nav className="fon navbar navbar-light"><form className="container-fluid">
          <div id='inp' className="input-group">
            <span className="bun input-group-text" id="basic-addon1"><svg fill="currentColor"
              height="20px"
              version="1.1" id="Capa_1" viewBox="0 0 450.4 450.4" xmlSpace="preserve"><path d=
 "M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796   s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z    M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"/>
              </svg></span>
              <input id='bl0' onKeyUp={input} type="text" className="form-control" placeholder="Search"
        aria-label="Search" aria-describedby="basic-addon1"/></div></form></nav>
        </div><Button id='bor' className={'mwu close h-auto z-10 shadow-medium self-center p-4'+
          ' top-0 radius-large' } variant="flat" color="default" radius="lg" size="sm">
        <span onClick={ () => myFunction([''], 0) }>&times;</span></Button>

      <Container id='h40' className="rounded-large"><div id='scrw' className="flex flex-wrap">
        { modc(iml, 3, 2) }{ modc(iml, 0, 2) }{ modc(iml, 2, 2, '2 image - 0 discount') }
        { modc(dict, 1, 2) }{ modc(iml, 2, 2, '4 image - fallback') }
        { modc(iml, 1, 2, 'Multi Image - fallback') }{ modc(iml, 4, 2) }{ modc(dict, 2, 2) }
        { modc(iml, 2, 2) }{ modc(iml, 1, 2) }{ modc(dict, 1, 2) }{ modc(iml, 1, 2) }</div>
</Container></div></div></div> }