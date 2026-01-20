import { Request, Response } from "express";

class ProfesoresController {

    // GET /profesores
    consultar(req: Request, res: Response) {
        try {
            res.send("consultar profesores");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }       
    }

    // GET /profesores/:id
    consultarDetalle(req: Request, res: Response) {
        const { id } = req.params;

        try {
            res.send("consultar detalle");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    // POST /profesores
    ingresar(req: Request, res: Response) {
        const { dni, nombre, apellido, email } = req.body;

        try {
            res.send("ingresar");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    // PUT /profesores/:id
    actualizar(req: Request, res: Response) {
        const { id } = req.params;
        const { dni, nombre, apellido, email } = req.body;

        try {
            res.send("actualizar");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    // DELETE /profesores/:id
    borrar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            res.send("borrar");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
}

export default new ProfesoresController();
