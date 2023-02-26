export interface ILocation{
    ip:string;
    city:string;
    state:string;
    zipcode:string;
    timezone:string;
    isp:string;
    lat:number;
    long:number;
}

export const fetchLocation = async (input:string):Promise<ILocation> => {
    const url = process.env.REACT_APP_API_URL;
    const key = process.env.REACT_APP_API_KEY;
    const query = isValidIp(input) ?`&ipAddress=${input}` : `&domain=${input}`;
    const request=`${url}apiKey=${key}${query}`;
    const result = fetch(request)
        .then(response => response.json())
        .then(data => {
            const location:ILocation = {
                ip:data.ip,
                city:data.location.city,
                state:data.location.region,
                zipcode:data.location.postalCode,
                timezone:data.location.timezone,
                isp:data.isp,
                lat:data.location.lat,
                long:data.location.lng
            }
            return location;
        });
    return result;
}

const isValidIp = (input:string):boolean => {
    let ipv4 = /(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/;
    let ipv6 = /((([0-9a-fA-F]){1,4})\:){7}([0-9a-fA-F]){1,4}/;
    if(input.match(ipv4) || input.match(ipv6))
    {
        return true;
    }
    return false;
}
