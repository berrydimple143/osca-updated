import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { message, notification, Form } from 'antd';
import Hero from '../components/front/Hero';
import SiteLayout from '../components/layouts/SiteLayout';
import RegistrationForm from '../components/forms/RegistrationForm';
import { register } from '../services/authService';
import { IsUnderAge, showNotification, formatDate } from '../services/helperService';
import { dateFormat, uploadURL } from '../services/configService';
import { getDetails, getBarangays, getGeneratedId, seniorIdExist } from '../services/dataService';

export function getStaticProps() {
    const dtFormat= dateFormat();
    const fileURL = uploadURL();
    return {
        props: {
          dtFormat,
          fileURL,
        },
    };
}

export default function Registration({ dtFormat, fileURL }) {
    const [formLoading, setFormLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [saveDisabled, setSaveDisabled] = useState(false);
    const [municipalities, setMunicipalities] = useState([]);
    const [chosenBarangay, setChosenBarangay] = useState([]);
    const [gender, setGender] = useState([]);
    const [civilStatus, setCivilStatus] = useState([]);
    const [bloodType, setBloodType] = useState([]);
    const [religion, setReligion] = useState([]);
    const [educations, setEducations] = useState([]);
    const [employmentStatus, setEmploymentStatus] = useState([]);
    const [classification, setClassification] = useState([]);
    const [illnesses, setIllnesses] = useState([]);
    const [companions, setCompanions] = useState([]);
    const [housings, setHousings] = useState([]);
    const [educationArea, setEducationArea] = useState([]);
    const [communityService, setCommunityService] = useState([]);
    const [involvements, setInvolvements] = useState([]);
    const [incomeSources, setIncomeSources] = useState([]);
    const [monthlyIncome, setMonthlyIncome] = useState([]);
    const [assets, setAssets] = useState([]);
    const [socialProblems, setSocialProblems] = useState([]);
    const [economicProblems, setEconomicProblems] = useState([]);
    const [healthIssues, setHealthIssues] = useState([]);
    const [sick, setSick] = useState("");
    const [memberType, setMemberType] = useState("");
    const [formInitValues, setFormInitValues] = useState({});
    const [addr, setAddr] = useState("");
    const [brgy, setBrgy] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [districtNumber, setDistrictNumber] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [municipality, setMunicipality] = useState("");
    const [prov, setProv] = useState("BULACAN");
    const [page, setPage] = useState("registration");
    const [regUploadData, setRegUploadData] = useState(null);
    const [offspring, setOffspring] = useState([]);
    const [medicines, setMedicines] = useState([]);
    const [showChildrenModal, setShowChildrenModal] = useState(false);
    const [showMedicineModal, setShowMedicineModal] = useState(false);
    const router = useRouter();
    const [form] = Form.useForm();
    const [userArea, setUserArea] = useState();
    const [userService, setUserService] = useState("");
    const [userHousing, setUserHousing] = useState();
    const [userCompanion, setUserCompanion] = useState("");
    const [userInvolvement, setUserInvolvement] = useState();
    const [userSource, setUserSource] = useState("");
    const [userAsset, setUserAsset] = useState();
    const [userSocial, setUserSocial] = useState("");
    const [userEconomic, setUserEconomic] = useState("");
    const [userHealth, setUserHealth] = useState("");

    const onRegUpload = async (info) =>
    {
        if (info.file.status !== 'uploading') {
          let src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(info.file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
          setRegUploadData(src);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            setRegUploadData(null);
            message.error(`${info.file.name} file upload failed.`);
        }
    }

    const uploadProps = {
          name: 'identification',
          accept: ".png, .jpeg, .jpg, .gif",
          action: fileURL,
          headers: {
            authorization: 'authorization-text',
          },
          onRemove(info) {
            setRegUploadData(null);
          },
          onChange: onRegUpload,
    };

    const onFinishFailed = (errorInfo) =>
    {
        showNotification('error', 'Invalid Inputs', 'There are some invalid inputs.', 'Please check and provide a valid one.');
    };

    const onFinish = async (values) =>
    {
        setSaveDisabled(true);
        setSaving(true);
        if(idNumber == "limit")
        {
            setSaveDisabled(false);
            setSaving(false);
            message.error('User limit exceeded.');
        } else
        {
            const { stat } = await seniorIdExist(idNumber);
            if(stat == "available")
            {
                setSaveDisabled(false);
                setSaving(false);
                message.error('Name is existing already. Please try again.');
            } else {
                values.data = regUploadData;
                values.offspring = offspring;
                values.medicines = medicines;
                save(values);
                setSaving(false);
            }
        }
    };
    const save = async (values) =>
    {
        const { reg_status } = await register(values);
        values.identification = '';
        if(reg_status == "success")
        {
            let id_msg = `ID No.: ${idNumber}`;
            showNotification('success', 'Successful', 'Registration successful.', id_msg);
            router.push("/");
	} else if(reg_status == "duplicate") {
            setSaveDisabled(false);
            message.error('This member already exist in our database.');
        } else {
            setSaveDisabled(false);
            message.error('Registration failed.');
        }
    }
    const handleClassification = (value) =>
    {
        let str = "";
        if(value.length > 0) {
            str = value.map(mtype =>{ return mtype.value }).join(",");
        }
        setMemberType(str);
        form.setFieldsValue({
            member_type: str,
        });
    }
    const handleIllness = (value) =>
    {
        let sk = "";
        if(value.length > 0) {
            sk = value.map(sick =>{ return sick.value }).join(",");
        }
        setSick(sk);
        form.setFieldsValue({
            selected_illness: sk,
        });
    }
    const handleSpecialization = (value) =>
    {
        let sk = "";
        if(value.length > 0) {
            sk = value.map(area =>{ return area.value }).join(",");
        }
        setUserArea(sk);
        form.setFieldsValue({
            specialization_area: sk,
        });
    }
    const handleServices = (value) =>
    {
        let sk = "";
        if(value.length > 0) {
            sk = value.map(service =>{ return service.value }).join(",");
        }
        setUserService(sk);
        form.setFieldsValue({
            user_services: sk,
        });
    }
    const handleCompanion = (value) =>
    {
        let sk = "";
        if(value.length > 0) {
            sk = value.map(comp =>{ return comp.value }).join(",");
        }
        setUserCompanion(sk);
        form.setFieldsValue({
            user_companion: sk,
        });
    }
    const handleInvolvement = (value) =>
    {
        let sk = "";
        if(value.length > 0) {
            sk = value.map(inv =>{ return inv.value }).join(",");
        }
        setUserInvolvement(sk);
        form.setFieldsValue({
            user_involvement: sk,
        });
    }
    const handleSocialProblem = (value) =>
    {
        let sk = "";
        if(value.length > 0) {
            sk = value.map(soc =>{ return soc.value }).join(",");
        }
        setUserSocial(sk);
        form.setFieldsValue({
            user_social_problem: sk,
        });
    }
    const handleEconomicProblem = (value) =>
    {
        let sk = "";
        if(value.length > 0) {
            sk = value.map(econ =>{ return econ.value }).join(",");
        }
        setUserEconomic(sk);
        form.setFieldsValue({
            user_economic_problem: sk,
        });
    }
    const handleHealthIssue = (value) =>
    {
        let sk = "";
        if(value.length > 0) {
            sk = value.map(hlt =>{ return hlt.value }).join(",");
        }
        setUserHealth(sk);
        form.setFieldsValue({
            user_health_issue: sk,
        });
    }
    const handleAssets = (value) =>
    {
        let sk = "";
        if(value.length > 0) {
            sk = value.map(asst =>{ return asst.value }).join(",");
        }
        setUserAsset(sk);
        form.setFieldsValue({
            user_assets: sk,
        });
    }
    const handleIncomeSource = (value) =>
    {
        let sk = "";
        if(value.length > 0) {
            sk = value.map(inc =>{ return inc.value }).join(",");
        }
        setUserSource(sk);
        form.setFieldsValue({
            user_income_source: sk,
        });
    }
    const getIdNumber = async (mun, dist) =>
    {
        try
        {
            const { senior_id } = await getGeneratedId(mun, dist);
            setIdNumber(senior_id);
            form.setFieldsValue({
                id_number: senior_id,
            });
        } catch (error)
        {
            setFormLoading(false);
            message.error("Something went wrong.");
        }
    }
    const setFullAddress = (brn, hn, st, add) =>
    {
        let addrs = `Brgy. ${brn}, ${addr}, ${prov}`;
        if(hn != "" && st == "")
        {
            addrs = `${hn} Brgy. ${brgy}, ${addr}, ${prov}`;
        }
        if(hn != "" && st != "")
        {
            addrs = `${houseNo}, ${st}, Brgy. ${brgy}, ${addr}, ${prov}`;
        }
        if(hn == "" && st != "")
        {
            addrs = `${st}, Brgy. ${brgy}, ${addr}, ${prov}`;
        }
        if(hn == "" && st == "" && brn == "")
        {
            addrs = `Brgy. ${brgy}, ${addr}, ${prov}`;
        }
        if(hn == "" && st == "" && brn != "" && add != "")
        {
            if(houseNo != "" && street != "")
            {
                addrs = `${houseNo}, ${street}, Brgy. ${brn}, ${add}, ${prov}`;
            }
            if(houseNo == "" && street != "")
            {
                addrs = `${street}, Brgy. ${brn}, ${add}, ${prov}`;
            }
            if(houseNo != "" && street == "")
            {
                addrs = `${houseNo}, Brgy. ${brn}, ${add}, ${prov}`;
            }
            if(houseNo == "" && street == "")
            {
                addrs = `Brgy. ${brn}, ${add}, ${prov}`;
            }
        }
        form.setFieldsValue({
            address: addrs,
        });
    }
    const getAddress = (value, value2) =>
    {
        let brn = value2.children;
        setBrgy(brn);
        form.setFieldsValue({
            barangay_name: brn,
        });
        setFullAddress(brn, '', '', '');
    }
    const getFullAddress = (e) =>
    {
        setHouseNo(e.target.value);
        setFullAddress('', e.target.value, street, '');
    }
    const getStreet = (e) =>
    {
        setStreet(e.target.value);
        setFullAddress('', houseNo, e.target.value, '');
    }
  const getAllBarangay = async (value, value2) => {
    setChosenBarangay([]);
    setBrgy("");
    form.setFieldsValue({
        barangay_name: "",
    });
    try {
        const selected = value2.children;
        setFormLoading(true);
        setMunicipality(value);
        setAddr(selected);
        const { barangays, district_no } = await getBarangays(value);
        setDistrictNumber(district_no);
        const brgyName = barangays[0].barangay_name;
        form.setFieldsValue({
            district_no: district_no,
            municipality_name: selected,
            barangay_name: brgyName,
            barangay: barangays[0].id
        });
        getIdNumber(value, district_no);
        setChosenBarangay(barangays);
        setBrgy(brgyName);
        setFullAddress(brgyName, '', '', selected);
        setFormLoading(false);
    } catch (error) {
        setFormLoading(false);
        message.error("Something went wrong.");
    }
  }
  const birthChanged = (date, dateString) =>
  {
        if(IsUnderAge(date))
        {
            showNotification('error', 'Date of Birth Error', 'Please check the birthdate entered.', 'You are not qualified for Senior Citizen membership');
            form.setFieldsValue({
                birth_date: null,
                formatted_bday: null,
            });
        } else
        {
            form.setFieldsValue({
                formatted_bday: formatDate(date, 'YYYY-MM-DD'),
            });
        }
  }
  const getAllData = async () => {
    try {
      setFormLoading(true);
      const {
            status,
            mun,
            genders,
            civil_statuses,
            blood_types,
            religions,
            education,
            employment_statuses,
            classifications,
            illness,
            comps,
            houses,
            com_services,
            educ_area,
            involvementsList,
            income_sources,
            assetsList,
            socialProblemList,
            economicProblemList,
            healthIssueList,
            incomeRange
        } = await getDetails();

      if(status == "success") {
          setMunicipalities(mun);
          setGender(genders);
          setCivilStatus(civil_statuses);
          setBloodType(blood_types);
          setReligion(religions);
          setEducations(education);
          setEmploymentStatus(employment_statuses);
          setClassification(classifications);
          setIllnesses(illness);
          setCompanions(comps);
          setHousings(houses);
          setCommunityService(com_services);
          setEducationArea(educ_area);
          setInvolvements(involvementsList);
          setIncomeSources(income_sources);
          setAssets(assetsList);
          setSocialProblems(socialProblemList);
          setEconomicProblems(economicProblemList);
          setHealthIssues(healthIssueList);
          setMonthlyIncome(incomeRange);
      }
      setFormLoading(false);
    } catch (error) {
      setFormLoading(false);
      message.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <SiteLayout title="Office of the Senior Citizen's Affairs - Registration" setLoading={setFormLoading}>
        <Hero
            heading1="Registration"
            page="registration"
            bgImage="h-screen bg-fixed bg-center bg-cover main-img"
            textWidth="w-180"
        />
        <RegistrationForm
            formInitValues={formInitValues}
            setFormInitValues={setFormInitValues}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            prov={prov}
            setProv={setProv}
            districtNumber={districtNumber}
            setDistrictNumber={setDistrictNumber}
            addr={addr}
            setAddr={setAddr}
            brgy={brgy}
            setBrgy={setBrgy}
            memberType={memberType}
            setMemberType={setMemberType}
            idNumber={idNumber}
            setIdNumber={setIdNumber}
            sick={sick}
            setSick={setSick}
            getAllBarangay={getAllBarangay}
            municipalities={municipalities}
            getAddress={getAddress}
            chosenBarangay={chosenBarangay}
            dtFormat={dtFormat}
            birthChanged={birthChanged}
            gender={gender}
            civilStatus={civilStatus}
            bloodType={bloodType}
            religion={religion}
            educations={educations}
            employmentStatus={employmentStatus}
            handleClassification={handleClassification}
            classification={classification}
            uploadProps={uploadProps}
            handleIllness={handleIllness}
            formLoading={formLoading}
            saving={saving}
            saveDisabled={saveDisabled}
            page={page}
            illnesses={illnesses}
            companions={companions}
            housings={housings}
            educationArea={educationArea}
            communityService={communityService}
            involvements={involvements}
            incomeSources={incomeSources}
            monthlyIncome={monthlyIncome}
            assets={assets}
            socialProblems={socialProblems}
            economicProblems={economicProblems}
            healthIssues={healthIssues}
            getFullAddress={getFullAddress}
            getStreet={getStreet}
            offspring={offspring}
            setOffspring={setOffspring}
            medicines={medicines}
            setMedicines={setMedicines}
            showChildrenModal={showChildrenModal}
            setShowChildrenModal={setShowChildrenModal}
            showMedicineModal={showMedicineModal}
            setShowMedicineModal={setShowMedicineModal}
            handleSpecialization={handleSpecialization}
            handleServices={handleServices}
            handleCompanion={handleCompanion}
            handleInvolvement={handleInvolvement}
            handleSocialProblem={handleSocialProblem}
            handleEconomicProblem={handleEconomicProblem}
            handleHealthIssue={handleHealthIssue}
            handleAssets={handleAssets}
            handleIncomeSource={handleIncomeSource}
            userArea={userArea}
            setUserArea={setUserArea}
            userService={userService}
            setUserService={setUserService}
            userHousing={userHousing}
            setUserHousing={setUserHousing}
            userCompanion={userCompanion}
            setUserCompanion={setUserCompanion}
            userInvolvement={userInvolvement}
            setUserInvolvement={setUserInvolvement}
            userSource={userSource}
            setUserSource={setUserSource}
            userAsset={userAsset}
            setUserAsset={setUserAsset}
            userSocial={userSocial}
            setUserSocial={setUserSocial}
            userEconomic={userEconomic}
            setUserEconomic={setUserEconomic}
            userHealth={userHealth}
            setUserHealth={setUserHealth}
        />
    </SiteLayout>
  )
}

