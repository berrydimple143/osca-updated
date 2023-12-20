import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import * as cookie from 'cookie';
import AdminLayout from '../../components/layouts/AdminLayout';
import BarChart from '../../components/admin/BarChart';
import StatisticsCard from '../../components/admin/StatisticsCard';
import { getMunicipalitiesMembers } from '../../services/analyticsService';
import ModalLoading from '../../components/ModalLoading';

export async function getServerSideProps({ req }) {
  const cookieData = cookie.parse(req.headers.cookie || '');
  const { data } = await getMunicipalitiesMembers(cookieData.token);

  return {
    props: { info: cookieData, data },
  }
}

export default function Dashboard({info, data})
{
    const [graphLabels, setGraphLabels] = useState('');
    const [graphValues, setGraphValues] = useState('');
    const [todayMembers, setTodayMembers] = useState(0);
    const [totalMembers, setTotalMembers] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isDashboard, setIsDashboard] = useState(true);
    const [isMember, setIsMember] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isReport, setIsReport] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState([]);

    const initComponents = () =>
    {
        const roleLabel = `Level: ${info.user_role} |`;
        setBreadcrumb([roleLabel, "Dashboard"]);
        if(data)
        {
            setGraphLabels(data.labels);
            setGraphValues(data.info);
            setTodayMembers(data.today);
            setTotalMembers(data.total);
            setLoading(false);
        }
    }
    useEffect(() => {
        initComponents();
    }, []);
    return (
        <AdminLayout
            role={info.user_role}
            isDashboard={isDashboard}
            isMember={isMember}
            isUser={isUser}
            isReport={isReport}
            title="Administration Panel"
            trail={breadcrumb}>
            {(loading) && (
                <ModalLoading
                      message="Loading, please wait ..."
                      pcolor="bg-yellow-500"
                />
            )}
            <div className="p-2 flex justify-between items-center">
                <StatisticsCard title="Today’s Senior Citizen" count={todayMembers} bgColor='bg-secondary' />
                <StatisticsCard title="Total Senior Citizen" count={totalMembers} bgColor='bg-primary' />
            </div>
            <div className="p-2 border">
                <BarChart
                    setLoading={setLoading}
                    legendLabel="Total Senior Citizen"
                    graphLabels={graphLabels}
                    graphValues={graphValues}
                    graphTitle="Total number of senior citizen members per municipality"
                    graphWidth={'950'}
                    graphHeight={'350'}
                 />
            </div>
        </AdminLayout>
    );
}

