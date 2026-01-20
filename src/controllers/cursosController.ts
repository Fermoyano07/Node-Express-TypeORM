import { Request, Response } from "express";

class CursosController {

    // GET /cursos
    consultar(req: Request, res: Response) {
        try {
            res.send("consultar cursos");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }       
    }

    // GET /cursos/:id
    consultarDetalle(req: Request, res: Response) {
        const { id } = req.params;

        try {
            res.send("consultar detalle");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    // POST /cursos
    ingresar(req: Request, res: Response) {
        const { dni, nombre, apellido, email } = req.body;

        try {
            res.send("ingresar");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    // PUT /cursos/:id
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

    // DELETE /cursos/:id
    borrar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            res.send("borrar");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    //
    asociarEstudiante(req: Request, res: Response) {
        const { id } = req.params;
        try {
            res.send("asociar estudiante");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
}

export default new CursosController();
