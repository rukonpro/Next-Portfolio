import {client} from "@/app/utils/apolloClient/apolloClient";
import gql from "graphql-tag";

export  async function getProjectInfo() {

    const { data ,loading,errors,error,networkStatus} = await client.query({
        query: gql`
            query{
                projectInfo{
                    title
                    description
                }
            }
        `,
    });

return {data ,loading,errors,error,networkStatus}
}