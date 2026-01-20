import { Request, Response } from "express";

class EstudiantesController {

    // GET /estudiantes
    consultar(req: Request, res: Response) {
        try {
            res.send("consultar estudiantes");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }       
    }

    // GET /estudiantes/:id
    consultarDetalle(req: Request, res: Response) {
        const { id } = req.params;

        try {
            res.send("consultar detalle");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    // POST /estudiantes
    ingresar(req: Request, res: Response) {
        const { dni, nombre, apellido, email } = req.body;

        try {
            res.send("ingresar");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    // PUT /estudiantes/:id
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

    // DELETE /estudiantes/:id
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

export default new EstudiantesController();
