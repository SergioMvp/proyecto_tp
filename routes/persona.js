import { Router } from "express"
import {check, checkSchema} from "express-validator"
import mongoose from 'mongose';

const router=new Router()

router.get('/persona',[
    check("cedula", "Digite su cedula").not(),
    check("nombre", "Digite su nombre").length({min:5}),
    check("nombre", "Digite su nombre").isEmpty()
],funcionescliente.getcliente);

router.get('/persona/:cedula',funcionescliente.getpersonaNombre);

router.post('/agregar',funcionespersona.postAgregarpersona);

router.put('/persona/:cedula', funcionespersona.putEditarpersona);

router.delete('/persona/:cedula', funcionespersona.deletepersona);

export default router