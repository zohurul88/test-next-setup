const Joi = require("joi");
export const commonMoveFile = Joi.array()
  .items(
    Joi.object({
      srcId: Joi.number().integer().min(1).required(),
      distName: Joi.string()
        .regex(/^(?!tmp\/|\/)\w+.+/i)
        .required()
        .messages({
          "object.regex": `dsitName should not start with tmp or /(root dir)`,
          "string.pattern.base": `dsitName should not start with 'tmp' or '/'(root dir)`,
        }),
    })
  )
  .unique((a, b) => a.distName === b.distName);
