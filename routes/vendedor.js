import { Router } from "express"
import {check, checkSchema} from "express-validator"
import mongoose from 'mongose';

const router=new Router()

router.get('/vendedor', funcionescliente.getcliente);

router.get('/persona/:cedula',funcionescliente.getpersonaNombre);

router.post('/agregar',funcionespersona.postAgregarpersona);

router.put('/persona/:cedula', funcionespersona.putEditarpersona);

router.delete('/persona/:cedula', funcionespersona.deletepersona);

export default router