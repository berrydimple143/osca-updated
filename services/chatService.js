import axios from "axios";
import Cookies from 'js-cookie';
const baseURL = `${process.env.NEXT_PUBLIC_API}/api`;
const rootURL = `${process.env.NEXT_PUBLIC_API}`;
const token = Cookies.get('token');
const header = { headers: { 'Authorization': `Bearer ${token}`, }};

export const getAdminToken = async (user) =>
{
    try
    {
        const { data } = await axios.post(`${baseURL}/getAdminToken`, user);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getMessages = async (params) =>
{
    try
    {
        const { data } = await axios.post(`${baseURL}/getMessages`, params, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const sendMessage = async (message) =>
{
    try
    {
        const { data } = await axios.post(`${baseURL}/sendMessage`, { message }, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const sendPublicMessage = async (message) =>
{
    try
    {
        const { data } = await axios.post(`${baseURL}/sendPublicMessage`, { message });
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getPublicMessages = async (params) =>
{
    try
    {
        const { data } = await axios.post(`${baseURL}/getPublicMessages`, params);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

