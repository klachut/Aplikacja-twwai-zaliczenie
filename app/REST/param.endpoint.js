import business from '../business/business.container';
import applicationException from "../service/applicationException";

const paramEndpoint = (router) => {
    router.get('/api/params', async (request, response, next) => {
        try {
            let result = await business.getParamManager().query();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });


    router.get('/api/params/last', async(req, res, next) => {
        try{
            let result = await business.getParamManager().getLast();
            res.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, res);
        }
    })
    
    router.get('/api/params/:id', async(req, res, next) => {
        try{
            let result = await business.getParamManager().get(req.params.id);
            res.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, res);
        }
    })
};
export default paramEndpoint;