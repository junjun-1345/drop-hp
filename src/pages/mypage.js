import { useQuery, gql } from "@apollo/client";
import { subscribe } from "graphql";

const GET_RESERVETION = gql`
  query {
    orders {
      data {
        attributes {
          name
          plan {
            data {
              attributes {
                name
                fee
              }
            }
          }
        }
      }
    }
  }
`;

const mypage = () => {
  const { loading, error, data } = useQuery(GET_RESERVETION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { orders } = data;

  if (!orders) return null;

  return (
    <div>
      {orders.data.map((value, index) => (
        <ul key={index}>
          <li>{value.attributes.name}</li>
          <li>{value.attributes.plan.data.attributes.name}</li>
          <li>{value.attributes.plan.data.attributes.fee}</li>
        </ul>
      ))}
    </div>
  );
};

export default mypage;
