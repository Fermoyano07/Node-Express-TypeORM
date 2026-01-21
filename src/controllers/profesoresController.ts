import { Request, Response } from "express";
import { Profesor} from "../models/profesorModel";

class profesorsController {

    constructor () {

    }

    // GET /profesores
    async consultar(req: Request, res: Response) {
        try {
            const data = await Profesor.find();
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }       
    }

    // GET /profesores/:id
    async consultarDetalle(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Profesor.findOneBy({ id: Number(id) });
            if(!registro) {
                throw new Error('profesor no encontrado');
            }
            res.status(200).json(registro);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    // POST /profesores
    async ingresar(req: Request, res: Response) {
        try {
            const registro = await Profesor.save(req.body);
            res.status(201).json(registro);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    // PUT /profesores/:id
    async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        
        try {
            const registro = await Profesor.findOneBy({ id: Number(id) });
            
            if(!registro) {
                throw new Error('profesor no encontrado');
            }

            await Profesor.update({ id:Number(id) }, req.body); 
            const registroActualizado = await Profesor.findOneBy({ id: Number(id) });
            res.status(200).json(registroActualizado);

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    // DELETE /profesores/:id
    async borrar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Profesor.findOneBy({ id: Number(id) });
            if(!registro) {
                throw new Error('profesor no encontrado');
            }
            await Profesor.delete({ id:Number(id) }); 
            res.status(204);

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
}

export default new profesorsController();
