import moment from 'moment';
import dayjs from 'dayjs';
import { notification } from 'antd';

export const disabledDate = (current) => {
  return current > dayjs().endOf('day');
};

export const IsUnderAge = (date) =>
{
    let a = moment();
    let b = moment(date, 'YYYY-MM-DD');
    let age = a.diff(b, 'years');
    if(age < 60) {
        return true;
    }
    return false;
};

export const upper = (str) =>
{
    if(str)
    {
        return str.toString().toUpperCase();
    }
    return str;
};

export const convertObjectToString = (object) =>
{
    Object.fromEntries(
        Object.entries(object).map(([k, v]) => [k, v + ''])
    )
}

export const searchAndCut = (str, searchTxt) =>
{
    if(str)
    {
        const pos = str.indexOf(searchTxt);
        if(pos !== -1)
        {
            str = str.substring(pos, -1) + ' ...';
        }
    }
    return str;
};

export const concatString = (str, limit) =>
{
    if(str)
    {
        if(str.length > limit) {
            str = str.substring(0, limit) + ' ...';
        }
    }
    return str;
};

export const computeAge = (date) =>
{
    let a = moment();
    let b = moment(date, 'YYYY-MM-DD');
    let age = a.diff(b, 'years');
    return age;
};

export const chatDate = (created) =>
{
    let msg = '';
    let eventTime = moment(created, 'YYYY-MM-DD HH:mm:ss a');
    const hours = moment.duration(moment() - eventTime).asHours();
    const hInt = Math.floor(hours);
    const minutes = moment.duration(60 * (hours - hInt), 'minutes').asMinutes();
    const mInt = Math.floor(minutes);
    const seconds = moment.duration(60 * (minutes - mInt), 'seconds').asSeconds();
    const sInt = Math.floor(seconds);
    if(hours >= 24) {
        let given = moment().startOf('day');
        let xd = moment.duration(given.diff(eventTime)).asDays();
        let cntr = 'days';
        if(xd == 1)
        {
            cntr = 'day';
        }
        msg = xd + ' ' + cntr;
    } else
    {
        msg = `${hInt}hr ${mInt}m ${sInt}s`;
    }
    return msg;
};

export const getMunicipalitiesObject = (mun) =>
{
    let muni = {};
    mun.map((item, index) => {
        muni[item.municipality_name] = item.municipality_code_number;
    });
    return muni;
};

export const getAgeFromDate = (date) =>
{
    let a = moment();
    let b = moment(date, 'YYYY-MM-DD');
    let age = a.diff(b, 'years');
    return age;
};

export const formatDate = (date, fmt) =>
{
    let newDate = moment(date).format(fmt);
    return newDate;
};

export const showNotification = (type, title, txt1, txt2) =>
{
    return notification[type]({
            message: title,
            description: (
              <>
                {txt1}
                <br />
                {txt2}
              </>
            ),
            placement: 'top',
            top: "30%"
        });
}
