'use client'
import React from "react"; import { CiTrash } from "react-icons/ci"
import {  MdOutlineSettings } from "react-icons/md"; import { HiArrowLeft } from "react-icons/hi"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'; import 'bootstrap/dist/css/bootstrap.css'
import { createRoot } from 'react-dom/client'
import {Card, CardFooter, Image, Button, Switch} from "@nextui-org/react"

export default function Home() { let tog, parent, p = 6, container, a, k:any, b, f,
  c = <Col xs lg="2" className="justify-content-md-center" style={{ borderLeft: '1px solid #ddd',
    position: 'relative', display: 'flex'}}>
    <Card isFooterBlurred radius="lg" className="border-none"></Card>
    <Button id='b1' style={{ zIndex: 0 }} className=
      "self-center p-2 radius-large absolute bg-white/20" variant="flat"
  color="default" radius="lg" size="sm">+ Add design</Button></Col>
  // const [isShown, setIsShown] = useState(false), co = true

  function changeBackground(e:any, h:any){
    console.log(e); parent = e.target
    while (parent.id.match(/r\d/) == null) {
      console.log(parent)
    parent = parent.parentElement }
    if (h == 'h') {
      tog = parent.querySelector('#b1, #del')
    // console.log(e , e.target, tog, co)
    // () =>{ co = 'white'
    // let tr = co ?  :
    //   <CiTrash style={{ height: '2em', color: 'white', strokeWidth: .5}}/>; co = !co
    // if (tog) createRoot(tog).render(tr)
    k = tog[0].style.display === "none" ? "block" : 'none'
    tog.forEach((e:any) => {e.style.display = k})
      // e.style.cssText += 'z-index: ' + (+e.style.zIndex ? 0 : 10) +' !important' } )
  } else parent.remove() }

  let greeting = (el:any) => { container = document.createElement('div'); f = el.id == 'btnr'
    k = f ? ( <Row id={ 'r'+p.toString() } style={{ justifyContent: 'flex-start'}}
    onMouseEnter={ (e) => changeBackground(e, 'h') }
    onMouseLeave={ (e) => changeBackground(e, 'h') } className="pb-9 justify-content-md-center">

      <Col xs lg='2'style={{ width: '11%', borderRight: '1px solid #eee' }}>
        <Row style={{ height: '50%' }} className="justify-content-md-center">
          <Col id='del' className="justify-content-md-center" style={{ alignContent: 'end',
            display: 'grid' }}><Button onClick={(e) => changeBackground(e, 'c')}
            className="shadow-medium self-center"
            style={{ display: "none", zoom: '2', fontFamily: 'Recoleta Medium',
              paddingLeft: 'calc(var(--bs-gutter-x) /4) !important', borderRadius: '2px',
        paddingRight: 'calc(var(--bs-gutter-x) /4) !important' }}>
          <CiTrash style={{ height: '2em', color: 'red', strokeWidth: .5}}/></Button></Col></Row>
        <Row><Col id='req' className="justify-content-md-center" style={{ blockSize: 'fit-content',
          display: 'flex' }}>
          <p style={{ marginBottom: 0, zoom: '2', fontFamily: 'Recoleta Medium' }}>{p}</p>
              <svg style={{ alignSelf: 'center' }} height="20px" viewBox="0 0 24 24" fill="none">
    <path d="M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z" fill="#000000"/>
    <path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="#000000"/>
    <path d="M19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z" fill="#000000"/>
    <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#000000"/>
    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#000000"/>
    <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#000000"/>
    <path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" fill="#000000"/>
    <path d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z" fill="#000000"/>
    <path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21Z" fill="#000000"/>
      </svg></Col></Row></Col>

      <Col xs lg="4" style={{ fontFamily: 'Recoleta Medium'}}>
          <Card className="justify-content-md-center" style={{ height: '100% !important' }}
            radius="lg"><Card className="justify-content-md-center"
              style={{ width: '90%', alignSelf: 'center', height: '70% !important' }}>
            <div style={{ alignSelf: 'center', marginBottom: 'calc(var(--nextui-radius-large) / 2)' }}>
              <Button style={{ marginRight: 'calc(var(--nextui-radius-large) / 2)' }} className=
                "shadow-medium p-1 radius-large text-black"
                variant="flat" color="default">+ Add Product Filters</Button></div>
      </Card></Card></Col>

      <Col xs lg="2" className="justify-content-md-center" style={{ borderLeft: '1px solid #ddd',
        position: 'relative', display: 'flex'}}>
        <Card isFooterBlurred radius="lg" className="border-none"></Card>
        <Button id='b1' style={{ zIndex: 0 }} className=
          "self-center p-2 radius-large absolute bg-white/20" variant="flat"
      color="default" radius="lg" size="sm">+ Add design</Button></Col>{c}

      <Col id="addc" xs lg="1" style={{ display: 'grid', borderLeft: '1px solid #ddd',
        paddingLeft: 'calc(var(--bs-gutter-x) * .8)'}}>
          {/* <Row className="justify-content-md-center"
          style={{ display: 'grid', alignSelf: 'center' }}> */}
        <Button onClick={greeting} className="shadow-medium self-center" style={{
            zoom: '2', fontFamily: 'Recoleta Medium',
            paddingLeft: 'calc(var(--bs-gutter-x) /4) !important', borderRadius: '2px',
      paddingRight: 'calc(var(--bs-gutter-x) /4) !important' }}>+</Button>
      {/* </Row> */}
    </Col></Row> ) : {c}
    b = (f ? 'before' : 'after') + 'begin'
    if (!f) document.querySelector('#rt')?.append(createRoot(<Col xs lg="2"
      className="justify-content-md-center" style={{ borderRight: '1px solid #eee',
      display: 'flex'}}>
      <Card style={{ alignSelf: 'center', flexGrow: 1, backgroundColor: '#f5f5f5', boxShadow: 'none',
        textAlign: 'center',
        borderRadius: 'calc(var(--nextui-radius-large)/2)', fontFamily: 'Recoleta Medium' }}
        isFooterBlurred radius="lg" className="p-1 border-none">Variant 2</Card>
          {/* </p> */}
      <Button style={{ backgroundColor: '#f5f5f5', borderRadius: '4px', paddingLeft: '7px !important',
        paddingRight: '7px !important' }}
        // , transition: 'all 0.5s', cursor: 'pointer'
        ><svg style={{ alignSelf: 'center' }} height="22" viewBox="8 0 8 24" fill="none"
      stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      className="lucide lucide-ellipsis-vertical">
        <circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>
    </svg></Button></Col>) )
    createRoot(container).render(k)
    a = document.querySelector('#addr')
  if (a) a.insertAdjacentElement(b as InsertPosition, container), p++ }

  return ( <div style={{ backgroundColor: 'white' }}>
    <div style={{width: '4rem'}} className=
  "p-3 h-screen bg-black z-20 fixed top-0 -left-96 lg:left-0  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
      <div className="flex-col justify-start item-center"><div className="my-4"> <div className=
  "flex rounded-md mb-8 justify-start items-center gap-4 hover:bg-gray-900 group cursor-pointer hover:shadow-lg">

          <svg viewBox="0 0 45 45" fill="none" id="svg-230198041_977">

    <g mask="url(#svg-230198041_977_mask0_18594_7116)"> <path  d=
    "M22.6407 0.822266V22.8675L13.0248 13.2486C12.1316 12.3479 11.6276 11.1326 11.6211 9.86415V0.822266H22.6407Z"
    fill="#04AE56"/> <path d=
    "M44.6895 22.8676H22.6367L32.2632 13.2487C32.7118 12.7956 33.2473 12.4378 33.8374 12.1966C34.4276 11.9554 35.0604 11.8358 35.6979 11.845H44.7367L44.6865 22.8676H44.6895Z" fill="#04AE56"/>
    <path d=
"M22.6407 44.9112V22.866L32.255 32.497C32.7087 32.9455 33.067 33.4811 33.3082 34.0716C33.5495 34.6621 33.6687 35.2954 33.6587 35.9332V44.9736L22.6407 44.9112ZM0.601562 22.8675H22.6407L13.0248 32.4849C12.1266 33.3831 10.9086 33.8886 9.6404 33.8886H0.601562V22.866V22.8675Z" fill="#04AE56"/>
            </g> </svg> </div> <div className=
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
            </svg> </div>

              <div className=
              "flex justify-start items-center gap-4 pl-1 hover:bg-gray-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <svg width="98" viewBox="0 0 208 173.7" role="img"><title>Shopify</title>
                <path fill="white" d="M130.7 32.9c-.1-.9-.9-1.3-1.5-1.4-.6-.1-12.6-.2-12.6-.2s-10.1-9.8-11.1-10.8-2.9-.7-3.7-.5c0 0-1.9.6-5.1 1.6-.5-1.7-1.3-3.8-2.4-5.9-3.6-6.9-8.8-10.5-15.2-10.5-.4 0-.9 0-1.3.1-.2-.2-.4-.4-.6-.7-2.8-3-6.3-4.4-10.5-4.3-8.2.2-16.3 6.1-23 16.7-4.7 7.4-8.2 16.7-9.2 23.9-9.4 2.9-16 4.9-16.1 5-4.7 1.5-4.9 1.6-5.5 6.1C12.4 55.3 0 151.4 0 151.4l104.1 18 45.1-11.2S130.8 33.7 130.7 32.9zm-39.2-9.7c-2.4.7-5.1 1.6-8.1 2.5-.1-4.1-.6-9.9-2.5-14.9 6.3 1.2 9.3 8.2 10.6 12.4zM78 27.4c-5.5 1.7-11.4 3.5-17.4 5.4 1.7-6.4 4.9-12.8 8.8-17 1.5-1.6 3.5-3.3 5.9-4.3 2.3 4.7 2.7 11.4 2.7 15.9zM66.8 5.8c1.9 0 3.5.4 4.9 1.3-2.2 1.1-4.4 2.8-6.4 5-5.2 5.6-9.2 14.2-10.8 22.6-5 1.5-9.8 3-14.3 4.4 3-13.2 14-32.9 26.6-33.3z"></path>
                <path fill="white" d="M129.2 31.5c-.6-.1-12.6-.2-12.6-.2s-10.1-9.8-11.1-10.8c-.4-.4-.9-.6-1.4-.6v149.5l45.1-11.2S130.8 33.8 130.7 32.9c-.2-.9-.9-1.3-1.5-1.4z"></path>
                <path fill="black" d="M79.1 54.7l-5.2 19.6s-5.8-2.7-12.8-2.2c-10.2.6-10.3 7-10.2 8.7.6 8.8 23.6 10.7 24.9 31.2 1 16.2-8.6 27.2-22.4 28.1-16.6 1-25.7-8.7-25.7-8.7l3.5-14.9s9.2 6.9 16.5 6.5c4.8-.3 6.5-4.2 6.3-7-.7-11.4-19.5-10.8-20.7-29.5-1-15.8 9.4-31.8 32.3-33.3 9-.8 13.5 1.5 13.5 1.5z"></path>
                </svg>
              </div>
            </div>

            {/* setting  */}
            <div className="my-4 pb-4" style={{position: 'absolute', bottom: '0'}}>
              <div
              className=
              "flex mb-2 justify-start items-center gap-4 pl-1 hover:bg-gray-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl fill-white" />
              </div> </div>
    </div></div>

    <div style={{ marginLeft: '6rem', marginTop: '2rem'}} className="framer-1s4jv5d" data-framer-name=
    "Fuel your Brand's Growth with Personalized Dynamic Creatives"
    data-framer-component-type="RichTextContainer">
    <p className="framer-text" style={{zoom: '2', fontFamily: 'Recoleta Medium'}}>
      <HiArrowLeft style={{display: 'inline-block', marginRight: '1rem', verticalAlign: '-.17rem'}}/>
        <span style={{width: '30%', display: 'inline-block', borderBottom: '1px solid #eee'}}
    >Rules space</span></p></div>

    <Button className="self-center p-4 absolute" variant="flat" color="default"
      style={{ top: '3rem', right: '2rem', backgroundColor: '#04AE56', color: '#FFFFFF',
        fontSize: '18px', borderRadius: '4px'
      // verticalAlign:'middle', display: 'inline-block', position: 'absolute', border: 'none',
      // , textAlign: 'center', padding: '10px', transition: 'all 0.5s', cursor: 'pointer', margin: '5px'
      }}>
        {/* <span> */}
          Publish Feed
          {/* </span> */}
    </Button>
{/* a */}
    <Container style={{ backgroundColor: '#f5f5f5', paddingTop: 'calc(var(--bs-gutter-x) * 2)',
      marginLeft: 'calc(var(--bs-gutter-x) * 4)', maxWidth: '1200px', paddingRight: '60px',
      marginTop: 'calc(var(--bs-gutter-x) * .5)', display: 'inline-block' }} className="rounded-large">

      <Row id='rt' className="justify-content-md-center" style={{
        marginBottom: 'calc(2 * var(--bs-gutter-x))' }}>
        <Col xs lg="2" style={{ width: '11%', borderRight: '1px solid #eee' }}>
        </Col>
        <Col xs lg="4" style={{ justifyContent: 'center', display: 'flex',
            borderRight: '1px solid #eee', fontFamily: 'Recoleta Medium' }}>
                {/* blockSize: 'fit-content', , width: 'fit-content' */}
            <Card style={{ width: '50%',
              textAlign: 'center', backgroundColor: '#f5f5f5', boxShadow: 'none', alignSelf: 'center',
              borderRadius: 'calc(var(--nextui-radius-large)/2)' }}
        isFooterBlurred radius="lg" className="p-1 border-none">Product Filter</Card></Col>

        <Col xs lg="2" className="justify-content-md-center" style={{ borderRight: '1px solid #eee',
          display: 'flex'}}><Card style={{ flexGrow: 1, backgroundColor: '#f5f5f5', boxShadow: 'none',
            textAlign: 'center', alignSelf: 'center',
            borderRadius: 'calc(var(--nextui-radius-large)/2)', fontFamily: 'Recoleta Medium' }}
            isFooterBlurred radius="lg" className="p-1 border-none">Primary Variant</Card>
              {/* <p style={{ marginBottom: '0px', fontFamily: 'Recoleta Medium'}}></p> */}
            <Button style={{ backgroundColor: '#f5f5f5', borderRadius: '4px',
            paddingLeft: '7px !important', paddingRight: '7px !important' }}
            ><svg style={{ alignSelf: 'center' }} height="22" viewBox="8 0 8 24" fill="none"
          stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          className="lucide lucide-ellipsis-vertical">
            <circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>
        </svg></Button></Col>

        <Col xs lg="2" className="justify-content-md-center" style={{ borderRight: '1px solid #eee',
          display: 'flex'}}>
          <Card style={{ alignSelf: 'center', flexGrow: 1, backgroundColor: '#f5f5f5', boxShadow: 'none',
            textAlign: 'center',
            borderRadius: 'calc(var(--nextui-radius-large)/2)', fontFamily: 'Recoleta Medium' }}
            isFooterBlurred radius="lg" className="p-1 border-none">Variant 2</Card>
              {/* </p> */}
          <Button style={{ backgroundColor: '#f5f5f5', borderRadius: '4px', paddingLeft: '7px !important',
            paddingRight: '7px !important' }}
            // , transition: 'all 0.5s', cursor: 'pointer'
            ><svg style={{ alignSelf: 'center' }} height="22" viewBox="8 0 8 24" fill="none"
          stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          className="lucide lucide-ellipsis-vertical">
            <circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>
      </svg></Button></Col></Row>

    <Row id='r1' style={{ justifyContent: 'flex-start'}} onMouseEnter={ (e) => changeBackground(e, 'h') }
      onMouseLeave={ (e) => changeBackground(e, 'h') } className="pb-9">

      <Col xs lg="2" style={{ width: '11%', borderRight: '1px solid #eee' }}>
        <Row style={{ height: '50%' }} className="justify-content-md-center">
          <Col id='del' className="justify-content-md-center" style={{ alignContent: 'end',
            display: 'grid' }}><Button onClick={(e) => changeBackground(e, 'c')}
            className="shadow-medium self-center" style={{ display: "none",
              zoom: '2', fontFamily: 'Recoleta Medium',
              paddingLeft: 'calc(var(--bs-gutter-x) /4) !important', borderRadius: '2px',
        paddingRight: 'calc(var(--bs-gutter-x) /4) !important' }}>
          <CiTrash style={{ height: '2em', color: 'red', strokeWidth: .5}}/></Button></Col></Row>
        <Row><Col id='req' className="justify-content-md-center" style={{ blockSize: 'fit-content',
          display: 'flex' }}>
          <p style={{ marginBottom: 0, zoom: '2', fontFamily: 'Recoleta Medium'}} >1</p>
          <svg style={{ alignSelf: 'center' }} height="20px" viewBox="0 0 24 24" fill="none">
<path d="M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z" fill="#000000"/>
<path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="#000000"/>
<path d="M19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z" fill="#000000"/>
<path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#000000"/>
<path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#000000"/>
<path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#000000"/>
<path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" fill="#000000"/>
<path d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z" fill="#000000"/>
<path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21Z" fill="#000000"/>
      </svg></Col></Row></Col>

      <Col xs lg="4" style={{ fontFamily: 'Recoleta Medium'}}>
        <Card className="justify-content-md-center" style={{ height: '100% !important' }}
          radius="lg"><Card className="justify-content-md-center"
            style={{ width: '90%', alignSelf: 'center', height: '70% !important' }}>
          <div style={{ alignSelf: 'center', marginBottom: 'calc(var(--nextui-radius-large) / 2)' }}>
            <Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
              marginRight: 'calc(var(--nextui-radius-large) / 2)' }} className=
              "shadow-medium p-1 text-black"
              variant="flat" color="default">Image list Product Image 2</Button>
              <Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
                paddingRight: '.4rem !important', paddingLeft: '.4rem !important', color: '#052',
                backgroundColor: '#04ae5620' }} className= "p-2 z-10" variant="flat"
                color="default">is empty</Button></div>
          <div style={{ alignSelf: 'center' }}>
            <Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
              marginRight: 'calc(var(--nextui-radius-large) / 2)' }} className=
              "p-2 shadow-medium text-black" variant="flat" color="default"
              >and Discount %</Button>
            <Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
              marginRight: 'calc(var(--nextui-radius-large) / 2)', color: '#052',
              backgroundColor: '#04ae5620' }} className=
              "p-" variant="flat" color="default">is</Button>
            <Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important' }} className=
              "p-2 shadow-medium text-black" variant="flat"
              color="default">0</Button>
      </div></Card></Card></Col>

      <Col xs lg="2" className="justify-content-md-center" style={{ borderLeft: '1px solid #ddd',
        position: 'relative',
        display: 'flex'}}><Card isFooterBlurred radius="lg" className="border-none">
          <Image alt="Woman" className="object-cover opacity-1" height={150}
            src="https://cdn.pixabay.com/photo/2021/09/13/08/16/purple-flower-6620617_640.jpg"
            width={150}/>
          <CardFooter style={{ borderBottomRightRadius: 'var(--nextui-radius-large)',
            borderBottomLeftRadius: 'var(--nextui-radius-large)' }} className=
  "justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10">
              <p className="text-tiny" style={{marginBottom: 0, fontFamily: 'Recoleta Medium'}}
          >Single Image prduct...</p></CardFooter></Card>
        <Button id='b1' style={{ display: "none" }} className=
          "z-10 self-center p-2 radius-large absolute bg-white/20" variant="flat"
          color="default" radius="lg" size="sm">
            <svg fill="#000" width="20px" version="1.1"
              id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <path d=
          "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
      ></path> </g> </g></svg></Button></Col>

      <Col xs lg="2" className="justify-content-md-center" style={{borderLeft: '1px solid #ddd',
        position: 'relative', display: 'flex'}}>
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image alt="Woman" className="object-cover opacity-1" height={150} width={150}
            src="https://cdn.pixabay.com/photo/2021/09/13/08/16/purple-flower-6620617_640.jpg"/>
        <CardFooter style={{borderBottomRightRadius: 'var(--nextui-radius-large)',
          borderBottomLeftRadius: 'var(--nextui-radius-large)' }} className=
  "justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl bottom-1 w-[calc(100%_-_8px)] z-10"
          ><p className="text-tiny" style={{ marginBottom: 0, fontFamily: 'Recoleta Medium' }}
            >Single Image prduct...</p></CardFooter></Card>
        <Button id='b1' style={{ display: "none" }} className=
          "z-10 self-center p-2 radius-large absolute bg-white/20" variant="flat"
          color="default" radius="lg" size="sm">
            <svg fill="#000" width="20px" version="1.1"
              id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <path d=
          "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
      ></path></g></g></svg></Button></Col>

      <Col id="addc" xs lg="1" style={{ display: 'grid', borderLeft: '1px solid #ddd',
        paddingLeft: 'calc(var(--bs-gutter-x) * .8)'}}><Row className="justify-content-md-center"
          style={{ display: 'grid', alignSelf: 'center' }}>
        <Button onClick={greeting} className="shadow-medium self-center" style={{
            zoom: '2', fontFamily: 'Recoleta Medium',
            paddingLeft: 'calc(var(--bs-gutter-x) /4) !important',
            borderRadius: '2px',
            // transition: 'all 0.5s', cursor: 'pointer'
    paddingRight: 'calc(var(--bs-gutter-x) /4) !important' }}>+</Button></Row></Col></Row>


    <Row id='r2' style={{ justifyContent: 'flex-start !important' }}
      onMouseEnter={ (e) => changeBackground(e, 'h') }
      onMouseLeave={ (e) => changeBackground(e, 'h') } className="pb-9">

      <Col xs lg="2" style={{ borderRight: '1px solid #eee' }}>
        <Row style={{ height: '50%' }} className="justify-content-md-center">
          <Col id='del' className="justify-content-md-center" style={{ alignContent: 'end',
            display: 'grid' }}></Col></Row>
        <Row><Col className="justify-content-md-center" style={{ blockSize: 'fit-content',
          display: 'flex' }}><p style={{ marginBottom: 0, zoom: '2', fontFamily: 'Recoleta Medium'}}
          >2</p><svg style={{ alignSelf: 'center' }} height="20px" viewBox="0 0 24 24" fill="none">
<path d="M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z" fill="#000000"/>
<path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="#000000"/>
<path d="M19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z" fill="#000000"/>
<path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#000000"/>
<path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#000000"/>
<path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#000000"/>
<path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" fill="#000000"/>
<path d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z" fill="#000000"/>
<path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21Z" fill="#000000"/>
      </svg></Col></Row></Col>

      <Col xs lg="4" style={{ fontFamily: 'Recoleta Medium' }}
        ><Card className="justify-content-md-center" style={{ height: '100% !important' }}
          radius="lg"><Card className="justify-content-md-center"
            style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', height: '40% !important' }}
            radius="lg"><Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
              blockSize: 'fit-content',
              alignSelf: 'center', marginRight: 'calc(var(--nextui-radius-large) / 2)' }} className=
              "p-2 shadow-medium text-black" variant="flat" color="default"
              >tags</Button>
            <Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
              blockSize: 'fit-content',
              alignSelf: 'center', marginRight: 'calc(var(--nextui-radius-large) / 2)', color: '#052',
              backgroundColor: '#04ae5620' }} className=
              "p-2" variant="flat" color="default">contain</Button>
            <Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
              blockSize: 'fit-content', alignSelf: 'center' }} className=
              "p-2 shadow-medium text-black" variant="flat"
      color="default">onsale</Button></Card></Card></Col>

      <Col xs lg="2" className="justify-content-md-center" style={{ borderLeft: '1px solid #ddd',
        display: 'flex' }}><Card isFooterBlurred radius="lg" className="border-none" >
          <div style={{ display: 'flex', height: '150px', width: '150px',
            justifyContent: 'flex-start !important' }}>
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
          width={100} /></Col></div>
          <CardFooter style={{ paddingTop: '4px !important', paddingBottom: '4px !important',
            paddingLeft: '0 !important',
            paddingRight: '0 !important', borderBottomRightRadius: 'var(--nextui-radius-large)',
            borderBottomLeftRadius: 'var(--nextui-radius-large)' }} className=
  "justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10"
            ><p className="text-tiny" style={{ marginBottom: 0, fontFamily: 'Recoleta Medium'}}
              >Multi Image - on Sale</p></CardFooter></Card><Button id='b1' style={{ zIndex: 0 }} className=
          "self-center p-2 radius-large absolute bg-white/20" variant="flat"
          color="default" radius="lg" size="sm">
            <svg fill="#000" width="20px" version="1.1"
              id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <path d=
          "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
      ></path></g></g></svg></Button></Col>

      <Col xs lg="2" className="justify-content-md-center" style={{ borderLeft: '1px solid #ddd',
        display: 'flex' }}><Card isFooterBlurred radius="lg" className="border-none">
          <div style={{ display: 'flex', height: '150px', width: '150px',
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
          <CardFooter style={{ paddingTop: '4px !important', paddingBottom: '4px !important',
            paddingLeft: '0 !important',
            paddingRight: '0 !important', borderBottomRightRadius: 'var(--nextui-radius-large)',
            borderBottomLeftRadius: 'var(--nextui-radius-large)' }} className=
  "justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10"
            ><p className="text-tiny" style={{ marginBottom: 0, fontFamily: 'Recoleta Medium'}}
              >4 Images - On Sale - ...</p>
            </CardFooter></Card><Button id='b1' style={{ zIndex: 0 }} className=
          "self-center p-2 radius-large absolute bg-white/20" variant="flat"
          color="default" radius="lg" size="sm">
            <svg fill="#000" width="20px" version="1.1"
              id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <path d=
          "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
      ></path></g></g></svg></Button></Col>

    <Col id="addc" xs lg="1" style={{ display: 'grid', borderLeft: '1px solid #ddd',
      paddingLeft: 'calc(var(--bs-gutter-x) * .8)'}}><Row className="justify-content-md-center"
        style={{ display: 'grid', alignSelf: 'center' }}>
      <Button onClick={greeting} className="shadow-medium self-center" style={{
          zoom: '2', fontFamily: 'Recoleta Medium',
          paddingLeft: 'calc(var(--bs-gutter-x) /4) !important',
          borderRadius: '2px',
          // transition: 'all 0.5s', cursor: 'pointer'
    paddingRight: 'calc(var(--bs-gutter-x) /4) !important' }}>+</Button></Row></Col></Row>


    <Row id='r3' style={{ justifyContent: 'flex-start !important' }}
      onMouseEnter={ (e) => changeBackground(e, 'h') }
      onMouseLeave={ (e) => changeBackground(e, 'h') } className="pb-9">

      <Col xs lg="2" style={{ borderRight: '1px solid #eee' }}>
        <Row style={{ height: '50%' }} className="justify-content-md-center">
          <Col id='del' className="justify-content-md-center" style={{alignContent: 'end',
            display: 'grid' }}></Col></Row>

        <Row><Col className="justify-content-md-center" style={{ blockSize: 'fit-content',
          display: 'flex'}}>
          <p style={{ marginBottom: 0, zoom: '2', fontFamily: 'Recoleta Medium'}} >3</p>
            <svg style={{ alignSelf: 'center' }} height="20px" viewBox="0 0 24 24" fill="none">
<path d="M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z" fill="#000000"/>
<path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="#000000"/>
<path d="M19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z" fill="#000000"/>
<path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#000000"/>
<path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#000000"/>
<path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#000000"/>
<path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" fill="#000000"/>
<path d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z" fill="#000000"/>
<path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21Z" fill="#000000"/>
      </svg></Col></Row></Col>

      <Col xs lg="4" style={{ fontFamily: 'Recoleta Medium' }}
        ><Card className="justify-content-md-center" style={{ height: '100% !important' }}
          radius="lg"><Card className="justify-content-md-center"
            style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', height: '40% !important' }}
            radius="lg"><Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
              blockSize: 'fit-content',
              alignSelf: 'center', marginRight: 'calc(var(--nextui-radius-large) / 2)' }} className=
              "p-2 shadow-medium text-black" variant="flat" color="default"
              >tags</Button><Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
                paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
                blockSize: 'fit-content',
              alignSelf: 'center', marginRight: 'calc(var(--nextui-radius-large) / 2)', color: '#052',
              backgroundColor: '#04ae5620' }} className=
              "p-2" variant="flat" color="default">contain</Button>
            <Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
              blockSize: 'fit-content', alignSelf: 'center' }} className=
              "p-2 shadow-medium text-black" variant="flat"
      color="default">__labelNew</Button></Card></Card></Col>

      <Col xs lg="2" className="justify-content-md-center" style={{ borderLeft: '1px solid #ddd',
        display: 'flex' }}><Card isFooterBlurred radius="lg" className="border-none" >
        <div style={{ display: 'flex', height: '150px', width: '150px',
            justifyContent: 'flex-start !important' }}>
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
        "https://cdn.pixabay.com/photo/2023/09/22/07/02/red-8268266_640.jpg" width={100}/></Col></div>
        <CardFooter style={{ paddingTop: '4px !important', paddingBottom: '4px !important',
            paddingLeft: '0 !important',
            paddingRight: '0 !important', borderBottomRightRadius: 'var(--nextui-radius-large)',
          borderBottomLeftRadius: 'var(--nextui-radius-large)' }} className=
  "justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10">
          <p className="text-tiny" style={{ marginBottom: 0, fontFamily: 'Recoleta Medium' }}
            >Multi Image - new arr...</p></CardFooter></Card>
        <Button id='b1' style={{ zIndex: 0 }} className=
          "self-center p-2 radius-large absolute bg-white/20" variant="flat"
          color="default" radius="lg" size="sm">
            <svg fill="#000" width="20px" version="1.1"
              id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <path d=
          "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
      ></path></g></g></svg></Button></Col>

      <Col xs lg="2" className="justify-content-md-center" style={{ borderLeft: '1px solid #ddd',
        display: 'flex' }}><Card isFooterBlurred radius="lg" className="border-none">
        <div style={{ display: 'flex', height: '150px', width: '150px',
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
        <CardFooter style={{ paddingTop: '4px !important', paddingBottom: '4px !important',
            paddingLeft: '0 !important',
            paddingRight: '0 !important', borderBottomRightRadius: 'var(--nextui-radius-large)',
            borderBottomLeftRadius: 'var(--nextui-radius-large)' }} className=
  "justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10"
            ><p className="text-tiny" style={{ marginBottom: 0, fontFamily: 'Recoleta Medium'}}
              >4 Images - new arrival</p>
        </CardFooter></Card><Button id='b1' style={{ zIndex: 0 }} className=
          "self-center p-2 radius-large absolute bg-white/20" variant="flat"
          color="default" radius="lg" size="sm">
            <svg fill="#000" width="20px" version="1.1"
              id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <path d=
          "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
      ></path></g></g></svg></Button></Col>

      <Col id="addc" xs lg="1" style={{ display: 'grid', borderLeft: '1px solid #ddd',
        paddingLeft: 'calc(var(--bs-gutter-x) * .8)'}}><Row className="justify-content-md-center"
          style={{ display: 'grid', alignSelf: 'center' }}>
        <Button onClick={greeting} className="shadow-medium self-center" style={{
            zoom: '2', fontFamily: 'Recoleta Medium',
            paddingLeft: 'calc(var(--bs-gutter-x) /4) !important',
            borderRadius: '2px',
            // transition: 'all 0.5s', cursor: 'pointer'
      paddingRight: 'calc(var(--bs-gutter-x) /4) !important' }}>+</Button></Row></Col></Row>


    <Row id='r4' style={{ justifyContent: 'flex-start !important' }}
      onMouseEnter={ (e) => changeBackground(e, 'h') }
      onMouseLeave={ (e) => changeBackground(e, 'h') } className="pb-9 justify-content-md-center">

      <Col xs lg="2" style={{ borderRight: '1px solid #eee' }}>
        <Row style={{ height: '50%' }} className="justify-content-md-center">
          <Col id='del' className="justify-content-md-center" style={{alignContent: 'end',
            display: 'grid' }}></Col></Row>

        <Row><Col className="justify-content-md-center" style={{ blockSize: 'fit-content',
          display: 'flex'}}>
          <p style={{ marginBottom: 0, zoom: '2', fontFamily: 'Recoleta Medium'}} >4</p>
            <svg style={{ alignSelf: 'center' }} height="20px" viewBox="0 0 24 24" fill="none">
<path d="M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z" fill="#000000"/>
<path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="#000000"/>
<path d="M19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z" fill="#000000"/>
<path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#000000"/>
<path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#000000"/>
<path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#000000"/>
<path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" fill="#000000"/>
<path d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z" fill="#000000"/>
<path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21Z" fill="#000000"/>
      </svg></Col></Row></Col>

      <Col xs lg="4" style={{ fontFamily: 'Recoleta Medium' }}
        ><Card className="justify-content-md-center" style={{ height: '100% !important' }}
          radius="lg"><Card className="justify-content-md-center"
            style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', height: '40% !important' }}
            radius="lg"><Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
              blockSize: 'fit-content',
              alignSelf: 'center', marginRight: 'calc(var(--nextui-radius-large) / 2)' }} className=
              "p-2 shadow-medium text-black" variant="flat"
      color="default">Discount %</Button>
            <Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
              blockSize: 'fit-content',
              alignSelf: 'center', marginRight: 'calc(var(--nextui-radius-large) / 2)', color: '#052',
              backgroundColor: '#04ae5620' }} className=
              "p-2" variant="flat" color="default">is</Button>
            <Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
              blockSize: 'fit-content', alignSelf: 'center' }} className=
              "p-2 shadow-medium text-black" variant="flat"
      color="default">0</Button></Card></Card></Col>

      <Col xs lg="2" className="justify-content-md-center" style={{ borderLeft: '1px solid #ddd',
        display: 'flex'}}><Card isFooterBlurred radius="lg" className="border-none" >
          <div style={{ display: 'flex', height: '150px', width: '150px',
            justifyContent: 'flex-start !important' }}>
            <Col className="justify-content-md-center" style={{ width: 'fit-content' }}>
              <Image style={{ borderBottomRightRadius: 0, borderTopRightRadius: 0
                    }} alt="Woman" className="object-cover opacity-1" height={150} src=
                "https://cdn.pixabay.com/photo/2024/06/21/08/21/hut-8843868_640.jpg"
            width={100} /></Col>
            <Col style={{ maxWidth: 'fit-content' }} className="justify-content-md-center">
                <Image style={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0,
                  borderBottomRightRadius: 0
                  }} alt="Woman" className="object-cover opacity-1" height={75} width={50} src=
                  "https://cdn.pixabay.com/photo/2023/07/10/06/13/mountain-8117525_640.jpg"/>
              <Image style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0,
                  borderTopRightRadius: 0,
                  }} alt="Woman" className="object-cover opacity-1" height={75} width={50} src=
                "	https://cdn.pixabay.com/photo/2022/11/19/14/26/nature-7602212_640.jpg"/></Col>
          </div>
    <CardFooter style={{ paddingTop: '4px !important', paddingBottom: '4px !important',
            paddingLeft: '0 !important',
            paddingRight: '0 !important', borderBottomRightRadius: 'var(--nextui-radius-large)',
            borderBottomLeftRadius: 'var(--nextui-radius-large)' }} className=
  "justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10"
            ><p className="text-tiny" style={{ marginBottom: 0, fontFamily: 'Recoleta Medium'}}
              >Single Images - Left - ...</p>
        </CardFooter></Card><Button id='b1' style={{ zIndex: 0 }} className=
          "self-center p-2 radius-large absolute bg-white/20" variant="flat"
          color="default" radius="lg" size="sm">
            <svg fill="#000" width="20px" version="1.1"
              id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <path d=
          "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
      ></path></g></g></svg></Button></Col>

      <Col xs lg="2" className="justify-content-md-center" style={{ borderLeft: '1px solid #ddd',
          display: 'flex' }}><Card isFooterBlurred radius="lg" className="border-none" >
      <div style={{ display: 'flex', height: '150px', width: '150px',
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
        <CardFooter style={{ paddingTop: '4px !important', paddingBottom: '4px !important',
            paddingLeft: '0 !important',
            paddingRight: '0 !important', borderBottomRightRadius: 'var(--nextui-radius-large)',
            borderBottomLeftRadius: 'var(--nextui-radius-large)' }} className=
  "justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10"
            ><p className="text-tiny" style={{ marginBottom: 0, fontFamily: 'Recoleta Medium'}}
              >4 Images - 0 disco...</p>
        </CardFooter></Card><Button id='b1' style={{ zIndex: 0 }} className=
          "self-center p-2 radius-large absolute bg-white/20" variant="flat"
          color="default" radius="lg" size="sm">
            <svg fill="#000" width="20px" version="1.1"
              id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <path d=
          "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
      ></path></g></g></svg></Button></Col>

    <Col id="addc" xs lg="1" style={{ display: 'grid', borderLeft: '1px solid #ddd',
      paddingLeft: 'calc(var(--bs-gutter-x) * .8)'}}><Row className="justify-content-md-center"
        style={{ display: 'grid', alignSelf: 'center' }}>
      <Button onClick={greeting} className="shadow-medium self-center" style={{
          zoom: '2', fontFamily: 'Recoleta Medium',
          paddingLeft: 'calc(var(--bs-gutter-x) /4) !important',
          borderRadius: '2px',
          // transition: 'all 0.5s', cursor: 'pointer'
    paddingRight: 'calc(var(--bs-gutter-x) /4) !important' }}>+</Button></Row></Col></Row>


    <Row id='r5' style={{ justifyContent: 'flex-start !important' }}
      onMouseEnter={ (e) => changeBackground(e, 'h') }
      onMouseLeave={ (e) => changeBackground(e, 'h') } className="pb-9">

      <Col xs lg="2" style={{ borderRight: '1px solid #eee' }}>
        <Row style={{ height: '50%' }} className="justify-content-md-center">
          <Col id='del' className="justify-content-md-center" style={{alignContent: 'end',
            display: 'grid' }}></Col></Row>

        <Row><Col className="justify-content-md-center" style={{ blockSize: 'fit-content',
          display: 'flex'}}>
          <p style={{ marginBottom: 0, zoom: '2', fontFamily: 'Recoleta Medium'}} >5</p>
            <svg style={{ alignSelf: 'center' }} height="20px" viewBox="0 0 24 24" fill="none">
<path d="M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z" fill="#000000"/>
<path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="#000000"/>
<path d="M19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z" fill="#000000"/>
<path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#000000"/>
<path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#000000"/>
<path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#000000"/>
<path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" fill="#000000"/>
<path d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z" fill="#000000"/>
<path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21Z" fill="#000000"/>
      </svg></Col></Row></Col>

      <Col xs lg="4" style={{ fontFamily: 'Recoleta Medium' }}
        ><Card className="justify-content-md-center" style={{ height: '100% !important' }}
          radius="lg"><Card className="justify-content-md-center"
            style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', height: '40% !important' }}
            radius="lg"><Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
              blockSize: 'fit-content',
              alignSelf: 'center', marginRight: 'calc(var(--nextui-radius-large) / 2)' }} className=
              "p-2 shadow-medium text-black" variant="flat"
      color="default">Image list Product Image 2</Button>
            <Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
              paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
              blockSize: 'fit-content',
              alignSelf: 'center', marginRight: 'calc(var(--nextui-radius-large) / 2)', color: '#052',
              backgroundColor: '#04ae5620' }} className=
              "p-2 z-10" variant="flat"
              color="default">is</Button>
              <Button style={{ borderRadius: 'calc(var(--nextui-radius-medium) / 3)',
                paddingRight: '.4rem !important', paddingLeft: '.4rem !important',
                blockSize: 'fit-content',
                alignSelf: 'center' }} className=
                "p-2 shadow-medium text-black" variant="flat"
        color="default">empty</Button></Card></Card></Col>

      <Col xs lg="2" className="justify-content-md-center" style={{ borderLeft: '1px solid #ddd',
        position: 'relative',
        display: 'flex'}}><Card isFooterBlurred radius="lg" className="border-none">
          <Image alt="Woman" className="object-cover opacity-1" height={150}
            src="https://cdn.pixabay.com/photo/2021/09/13/08/16/purple-flower-6620617_640.jpg"
            width={150}/>
          <CardFooter style={{ borderBottomRightRadius: 'var(--nextui-radius-large)',
            borderBottomLeftRadius: 'var(--nextui-radius-large)' }} className=
  "justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10">
              <p className="text-tiny" style={{ marginBottom: 0, fontFamily: 'Recoleta Medium' }}
                >Single Image prduct...</p></CardFooter></Card>
        <Button id='b1' style={{ zIndex: 0 }} className=
          "self-center p-2 radius-large absolute bg-white/20" variant="flat"
          color="default" radius="lg" size="sm">
            <svg fill="#000" width="20px" version="1.1"
              id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <path d=
          "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
      ></path> </g> </g></svg></Button></Col>

      <Col xs lg="2" className="justify-content-md-center" style={{borderLeft: '1px solid #ddd',
        position: 'relative', display: 'flex'}}>
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image alt="Woman" className="object-cover opacity-1" height={150} width={150}
            src="https://cdn.pixabay.com/photo/2021/09/13/08/16/purple-flower-6620617_640.jpg"/>
        <CardFooter style={{borderBottomRightRadius: 'var(--nextui-radius-large)',
          borderBottomLeftRadius: 'var(--nextui-radius-large)' }} className=
  "justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl bottom-1 w-[calc(100%_-_8px)] z-10"
          ><p className="text-tiny" style={{ marginBottom: 0, fontFamily: 'Recoleta Medium' }}
            >Single Image prduct...</p></CardFooter></Card>
        <Button id='b1' style={{ zIndex: 0 }} className=
          "self-center p-2 radius-large absolute bg-white/20" variant="flat"
          color="default" radius="lg" size="sm">
            <svg fill="#000" width="20px" version="1.1"
              id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <path d=
          "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
      ></path></g></g></svg></Button></Col>

      <Col id="addc" xs lg="1" style={{ display: 'grid', borderLeft: '1px solid #ddd',
        paddingLeft: 'calc(var(--bs-gutter-x) * .8)'}}><Row className="justify-content-md-center"
          style={{ display: 'grid', alignSelf: 'center' }}>
        <Button onClick={greeting} className="shadow-medium self-center" style={{
            zoom: '2', fontFamily: 'Recoleta Medium',
            paddingLeft: 'calc(var(--bs-gutter-x) /4) !important',
            borderRadius: '2px',
            // transition: 'all 0.5s', cursor: 'pointer'
    paddingRight: 'calc(var(--bs-gutter-x) /4) !important' }}>+</Button></Row></Col></Row>

    <Row id="addr" className="pb-9 justify-content-md-center">
      <Col id="ar" xs lg="2" className="text-center" style={{zoom: '2', fontFamily: 'Recoleta Medium'}}>
      <Button onClick={greeting} className="shadow-medium self-center" style={{
          fontFamily: 'Recoleta Medium', paddingLeft: 'calc(var(--bs-gutter-x) /4) !important',
          borderRadius: '2px',
          paddingRight: 'calc(var(--bs-gutter-x) /4) !important' }}>+</Button></Col>
    <Col xs lg="9"></Col></Row></Container>

    <p className="framer-text" style={{  marginLeft: '6rem', fontFamily: 'Recoleta Medium' }}>
      <span style={{ zoom: 2, width: '30%', display: 'inline-block' }}
      // #04AE56
        >Design for remaining SKU's</span><Switch color="success" defaultSelected 
    aria-label="Automatic updates"/></p>

    <Container style={{ paddingTop: 'calc(var(--bs-gutter-x) * 2)',
      marginLeft: 'calc(var(--bs-gutter-x) * 4)', maxWidth: '1200px', paddingRight: '60px',
      marginTop: 'calc(var(--bs-gutter-x) * .5)', display: 'inline-block' }} className="rounded-large">

    <Row id='r2' style={{ justifyContent: 'flex-start !important' }}
      onMouseEnter={ (e) => changeBackground(e, 'h') }
      onMouseLeave={ (e) => changeBackground(e, 'h') } className="pb-9">
{/* , alignSelf: 'center', textAlign: 'center' */}
      <Col xs lg="7" style={{ fontFamily: 'Recoleta Medium',
        borderRight: '1px solid #eee' }}>
          <Card className="justify-content-md-center" style={{ backgroundColor: '#fafafa',
          height: '100% !important' }}
        radius="lg">N/A</Card></Col>

      <Col xs lg="2" className="justify-content-md-center" style={{ borderLeft: '1px solid #ddd',
        display: 'flex' }}><Card isFooterBlurred radius="lg" className="border-none" >
          <div style={{ display: 'flex', height: '150px', width: '150px',
            justifyContent: 'flex-start !important' }}>
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
          width={100} /></Col></div>
          <CardFooter style={{ borderBottomRightRadius: 'var(--nextui-radius-large)',
            borderBottomLeftRadius: 'var(--nextui-radius-large)' }} className=
  "justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10">
      <p className="text-tiny" style={{ marginBottom: 0, fontFamily: 'Recoleta Medium' }}
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

      <Col xs lg="2" className="justify-content-md-center" style={{ borderLeft: '1px solid #ddd',
        display: 'flex' }}><Card isFooterBlurred radius="lg" className="border-none">
          <div style={{ display: 'flex', height: '150px', width: '150px',
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
  "justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10"
            ><p className="text-tiny" style={{ marginBottom: 0, fontFamily: 'Recoleta Medium'}}
              >4 Images - fallback</p>
            </CardFooter></Card><Button id='b1' style={{ zIndex: 0 }} className=
          "self-center p-2 radius-large absolute bg-white/20" variant="flat"
          color="default" radius="lg" size="sm">
            <svg fill="#000" width="20px" version="1.1"
              id="Capa_1" viewBox="0 0 348.882 348.882" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <path d=
          "M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231 c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685 c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176 C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99 L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386 c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"></path> <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904 c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15 s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798 c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
></path></g></g></svg></Button></Col></Row></Container></div> ) }