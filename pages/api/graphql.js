import {graphql, buildSchema} from 'graphql';

export default (req, res) => {
  
  const query = req.body.query

  // Construct a schema, using GraphQL schema language
  var schema = buildSchema(`
    type Query {
      user: String
    }
  `);
 
  // The root provides a resolver function for each API endpoint
  var root = {
    user: () => {
      return 'Jane Foster';
    }
  };
 
  // Run the GraphQL query '{ hello }' and print out the response
  graphql(schema, query, root).then((response) => {
    res.statusCode = 200
    res.json(response)
  });
}
