/**
 * This code is deployed as the Lambda function in AWS. 
 * It just returns the input event as it is
 */

exports.handler = async(event, context) => {
  return event;
};

