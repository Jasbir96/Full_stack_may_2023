const createFactory = (ElementModel) => {
    return async function (req, res) {
        try {
            const elementDetails = req.body;
            // adding element to the file 
            const element = await ElementModel.create(elementDetails);

            res.status(200).json({
                status: "successfull",
                message: `added  the element `,
                element: element
            })
        } catch (err) {
            res.status(500).json({
                status: "failure",
                message: err.message
            })
        }

    }
}

const getAllFactory = (ElementModel) => {
    return async function (req, res) {
        try {
            console.log("I am inside  get method");
            const elementDataStore = await ElementModel.find();
            if (elementDataStore.length == 0) {
                throw new Error("No elements are present")
            }
            res.status(200).json({
                status: "success",
                message: elementDataStore
            })
        } catch (err) {
            res.status(404).json({
                status: "failure",
                message: err.message
            })
        }

    }
}

const getByIdFactory = (ElementModel) => {
    return async function (req, res) {
        try {
            const elementId = req.params.elementId;
            const elementDetails = await ElementModel.findById(elementId);

            if (elementDetails == "no element found") {
                throw new Error(`element with ${elementId} not found`);
            } else {
                res.status(200).json({
                    status: "successfull",
                    message: elementDetails
                })
            }
        } catch (err) {
            res.status(404).json({
                status: "failure",
                message: err.message
            })
        }
    }
}
const deleteByIdFactory = (ElementModel) => {
    return async function (req, res) {
        let { elementId } = req.params;
        try {
            let element = await ElementModel.findByIdAndDelete(elementId);
            res.status(200).json({
                status: "successfull element deleted",
                message: element
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: "failure",
                message: err.message

            });
        }
    }
}

module.exports =
{
    createFactory,
    getAllFactory,
    getByIdFactory,
    deleteByIdFactory

}