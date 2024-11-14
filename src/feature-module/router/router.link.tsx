import React from "react";
import {  Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import Signin from "../auth/signin";
import StartChat from "../pages/index/startChat";
import Signup from "../auth/signup";
import ForgotPassword from "../auth/forgotPassword";
import ResetPassword from "../auth/resetPassword";
import Otp from "../auth/otp";
import Success from "../auth/success";
import Chat from "../pages/chat/chat";
import GroupChat from "../pages/group-chat/groupChat";
import Status from "../pages/status/status";
import MyStatus from "../pages/status/myStatus";
import UserStatus from "../pages/status/userStatus";
import AllCalls from "../pages/calls/allCalls";
import AdminLogin from "../admin/authentication/login";
import { AdminDashboard } from "../admin/pages/dashboard/adminDashboard";
import ClipBoard from "../uiInterface/advanced-ui/clipboard";
import Counter from "../uiInterface/advanced-ui/counter";
import DragAndDrop from "../uiInterface/advanced-ui/dragdrop";
import RangeSlides from "../uiInterface/base-ui/rangeslider";
import Rating from "../uiInterface/advanced-ui/rating";
import Ribbon from "antd/es/badge/Ribbon";
import Stickynote from "../uiInterface/advanced-ui/stickynote";
import TextEditor from "../uiInterface/advanced-ui/texteditor";
import Timeline from "../uiInterface/advanced-ui/timeline";
import Accordion from "../uiInterface/base-ui/accordion";
import Alert from "../uiInterface/base-ui/alert";
import Avatar from "../uiInterface/base-ui/avatar";
import Badges from "../uiInterface/base-ui/badges";
import Borders from "../uiInterface/base-ui/borders";
import Breadcrumb from "../uiInterface/base-ui/breadcrumb";
import Cards from "../uiInterface/base-ui/cards";
import Carousel from "../uiInterface/base-ui/carousel";
import Colors from "../uiInterface/base-ui/colors";
import Dropdowns from "../uiInterface/base-ui/dropdowns";
import Grid from "../uiInterface/base-ui/grid";
import Images from "../uiInterface/base-ui/images";
import Lightboxes from "../uiInterface/base-ui/lightbox";
import Media from "../uiInterface/base-ui/media";
import Modals from "../uiInterface/base-ui/modals";
import NavTabs from "../uiInterface/base-ui/navtabs";
import Offcanvas from "../uiInterface/base-ui/offcanvas";
import Pagination from "../uiInterface/base-ui/pagination";
import Placeholder from "../uiInterface/base-ui/placeholder";
import Popovers from "../uiInterface/base-ui/popover";
import Progress from "../uiInterface/base-ui/progress";
import Spinner from "../uiInterface/base-ui/spinner";
import Toasts from "../uiInterface/base-ui/toasts";
import Tooltips from "../uiInterface/base-ui/tooltips";
import Typography from "../uiInterface/base-ui/typography";
import Video from "../uiInterface/base-ui/video";
import Apexchart from "../uiInterface/charts/apexcharts";
import ChartJs from "../uiInterface/charts/chartjs";
import FloatingLabel from "../uiInterface/forms/formelements/layouts/floating-label";
import FormHorizontal from "../uiInterface/forms/formelements/layouts/form-horizontal";
import FormSelect2 from "../uiInterface/forms/formelements/layouts/form-select2";
import FormValidation from "../uiInterface/forms/formelements/layouts/form-validation";
import FormVertical from "../uiInterface/forms/formelements/layouts/form-vertical";
import BasicInputs from "../uiInterface/forms/formelements/basic-inputs";
import CheckboxRadios from "../uiInterface/forms/formelements/checkbox-radios";
import FileUpload from "../uiInterface/forms/formelements/fileupload";
import FormMask from "../uiInterface/forms/formelements/form-mask";
import { FormSelect } from "react-bootstrap";
import FormWizard from "../uiInterface/forms/formelements/form-wizard";
import GridGutters from "../uiInterface/forms/formelements/grid-gutters";
import InputGroup from "../uiInterface/forms/formelements/input-group";
import FeatherIcons from "../uiInterface/icons/feathericon";
import FlagIcons from "../uiInterface/icons/flagicons";
import FontawesomeIcons from "../uiInterface/icons/fontawesome";
import IonicIcons from "../uiInterface/icons/ionicicons";
import MaterialIcons from "../uiInterface/icons/materialicon";
import PE7Icons from "../uiInterface/icons/pe7icons";
import SimplelineIcons from "../uiInterface/icons/simplelineicon";
import ThemifyIcons from "../uiInterface/icons/themify";
import TypiconIcons from "../uiInterface/icons/typicons";
import WeatherIcons from "../uiInterface/icons/weathericons";
import Buttons from "../uiInterface/base-ui/buttons";
import ButtonsGroup from "../uiInterface/base-ui/buttonsgroup";
import UserList from "../admin/pages/users/userList";
import Blockuser from "../admin/pages/users/blockuser";
import Reportuser from "../admin/pages/users/reportuser";
import Inviteuser from "../admin/pages/users/inviteuser";
import Group from "../admin/pages/group";
import Chats from "../admin/pages/chats";
import Calls from "../admin/pages/calls";
import AbuseMessage from "../admin/pages/abuse-messages";
import Stories from "../admin/pages/stories";
import ProfileSettings from "../admin/pages/settings/general-settings/profile-settings";
import Notification from "../admin/pages/settings/general-settings/notification_settings";
import VideoAudioSettings from "../admin/pages/settings/app-settings/video-audio-settings";
import CustomeFields from "../admin/pages/settings/app-settings/custom-fields";
import Integration from "../admin/pages/settings/app-settings/integrations";
import LocalizationSettings from "../admin/pages/settings/system-settings/localization-settings";
import EmailSettings from "../admin/pages/settings/system-settings/email-settings";
import SmsSettings from "../admin/pages/settings/system-settings/sms-settings";
import OtpSettings from "../admin/pages/settings/system-settings/otp";
import LanguageSettings from "../admin/pages/settings/system-settings/language/index";
import AddLanguage from "../admin/pages/settings/system-settings/add-language";
import LanguageWeb from "../admin/pages/settings/system-settings/language-web";
import GdprSettings from "../admin/pages/settings/system-settings/gdpr";
import AppearanceSettings from "../admin/pages/settings/theme-settings/appearance-settings";
import BackupSettings from "../admin/pages/settings/other-settings/backup";
import BanAddress from "../admin/pages/settings/other-settings/ban-address";
import ClearCache from "../admin/pages/settings/other-settings/clear-cache";
import StorageSettings from "../admin/pages/settings/other-settings/storage";
import SocialAuth from "../admin/pages/settings/app-settings/social-auth";
import ChatSettings from "../admin/pages/settings/app-settings/chat-settings";
import CompanySettings from "../admin/pages/settings/app-settings/compay-settings";
import AuthenticationSettings from "../admin/pages/settings/app-settings/authentication-settings";
import ChangePassword from "../admin/pages/settings/general-settings/change-password";
import AdminForgetPassword from "../admin/authentication/forget-password";
import AdminResetPassword from "../admin/authentication/reset-password";
import AdminResetPasswordSuccess from "../admin/authentication/reset-password-success";
import DataTables from "../uiInterface/table/data-tables";
import TablesBasic from "../uiInterface/table/tables-basic";


const route = all_routes;

export const publicRoutes = [
  {
    path: route.index,
    element: <StartChat />,
    route: Route,
    title:'Chat'
  },
  {
    path: route.chat,
    element: <Chat />,
    route: Route,
    title:'Chat'
  },
  {
    path: route.groupChat,
    element: <GroupChat />,
    route: Route,
    title:'Group'
  },
  {
    path: route.status,
    element: <Status />,
    route: Route,
    title:'Status'
  },
  {
    path: route.myStatus,
    element: <MyStatus />,
    route: Route,
    title:'Status'
  },
  {
    path: route.userStatus,
    element: <UserStatus />,
    route: Route,
    title:'Status'
  },
  {
    path: route.allCalls,
    element: <AllCalls />,
    route: Route,
    title:'Calls'
  },
  
];

export const authRoutes = [
  {
    path: '/',
    element: <Navigate to={route.signin} />,
    route: Route,
    title:'Signin'
  },
  {
    path: route.signin,
    element: <Signin />,
    route: Route,
    title:'Signin'
  },
  {
    path: route.signup,
    element: <Signup />,
    route: Route,
    title:'Signup'
  },
  {
    path: route.forgotPassword,
    element: <ForgotPassword />,
    route: Route,
    title:'ForgotPassword'
  },
  {
    path: route.resetPassword,
    element: <ResetPassword />,
    route: Route,
    title:'ResetPassword'
  },
  {
    path: route.otp,
    element: <Otp />,
    route: Route,
    title:'OTP'
  },
  {
    path: route.success,
    element: <Success />,
    route: Route,
    title:'Success'
  },
  
];
export const adminRoutes = [
  {
    path: route.dashboard,
    element: <AdminDashboard />,
    route: Route,
    title:'Dashboard'
  },
  {
    path: route.clipboard,
    element: <ClipBoard />,
    route: Route,
    title:'Clipboard'
  },
  {
    path: route.counter,
    element: <Counter />,
    route: Route,
    title:'Counter'
  },
  {
    path: route.dragandDrop,
    element: <DragAndDrop />,
    route: Route,
    title:'Drang and Drop'
  },
  {
    path: route.rangeSlider,
    element: <RangeSlides />,
    route: Route,
    title:'Rangeslider'
  },
  {
    path: route.rating,
    element: <Rating />,
    route: Route,
    title:'Rating'
  },
  {
    path: route.ribbon,
    element: <Ribbon />,
    route: Route,
    title:'Ribbon'
  },
  {
    path: route.stickyNotes,
    element: <Stickynote />,
    route: Route,
    title:'Stickynote'
  },
  {
    path: route.textEditor,
    element: <TextEditor />,
    route: Route,
    title:'TextEditor'
  },
  {
    path: route.timeLine,
    element: <Timeline />,
    route: Route,
    title:'TimeLine'
  },
  {
    path: route.accordion,
    element: <Accordion />,
    route: Route,
    title:'Accordion'
  },
  {
    path: route.alert,
    element: <Alert />,
    route: Route,
    title:'Alert'
  },
  {
    path: route.avatar,
    element: <Avatar />,
    route: Route,
    title:'Avatar'
  },
  {
    path: route.badges,
    element: <Badges />,
    route: Route,
    title:'Badges'
  },
  {
    path: route.border,
    element: <Borders />,
    route: Route,
    title:'Borders'
  },
  {
    path: route.breadcrums,
    element: <Breadcrumb />,
    route: Route,
    title:'Breadcrumb'
  },
  {
    path: route.button,
    element: <Buttons />,
    route: Route,
    title:'Button'
  },
  {
    path: route.buttonGroup,
    element: <ButtonsGroup />,
    route: Route,
    title:'Buttons Group'
  },
  {
    path: route.cards,
    element: <Cards />,
    route: Route,
    title:'Cards'
  },
  {
    path: route.carousel,
    element: <Carousel />,
    route: Route,
    title:'Carousel'
  },
  {
    path: route.colors,
    element: <Colors />,
    route: Route,
    title:'Colors'
  },
  {
    path: route.dropdowns,
    element: <Dropdowns />,
    route: Route,
    title:'Dropdowns'
  },
  {
    path: route.grid,
    element: <Grid />,
    route: Route,
    title:'Grid'
  },
  {
    path: route.images,
    element: <Images />,
    route: Route,
    title:'Images'
  },
  {
    path: route.lightbox,
    element: <Lightboxes />,
    route: Route,
    title:'Lightboxes'
  },
  {
    path: route.media,
    element: <Media />,
    route: Route,
    title:'Media'
  },
  {
    path: route.modals,
    element: <Modals />,
    route: Route,
    title:'Modals'
  },
  {
    path: route.navTabs,
    element: <NavTabs />,
    route: Route,
    title:'NavTabs'
  },
  {
    path: route.offcanvas,
    element: <Offcanvas />,
    route: Route,
    title:'Offcanvas'
  },
  {
    path: route.pagination,
    element: <Pagination />,
    route: Route,
    title:'Pagination'
  },
  {
    path: route.placeholder,
    element: <Placeholder />,
    route: Route,
    title:'Placeholder'
  },
  {
    path: route.popover,
    element: <Popovers />,
    route: Route,
    title:'Popovers'
  },
  {
    path: route.progress,
    element: <Progress />,
    route: Route,
    title:'Progress'
  },
  {
    path: route.rangeSlider,
    element: <RangeSlides />,
    route: Route,
    title:'RangeSlides'
  },
  {
    path: route.spinner,
    element: <Spinner />,
    route: Route,
    title:'Spinner'
  },
  {
    path: route.toasts,
    element: <Toasts />,
    route: Route,
    title:'Toasts'
  },
  {
    path: route.tooltip,
    element: <Tooltips />,
    route: Route,
    title:'Tooltips'
  },
  {
    path: route.typography,
    element: <Typography />,
    route: Route,
    title:'Typography'
  },
  {
    path: route.video,
    element: <Video />,
    route: Route,
    title:'Video'
  },
  {
    path: route.apexChat,
    element: <Apexchart />,
    route: Route,
    title:'Apexchart'
  },
  {
    path: route.chart,
    element: <ChartJs />,
    route: Route,
    title:'Chart'
  },
  {
    path: route.floatingLable,
    element: <FloatingLabel />,
    route: Route,
    title:'Floating Label'
  },
  {
    path: route.horizontalForm,
    element: <FormHorizontal />,
    route: Route,
    title:'Form Horizontal'
  },
  {
    path: route.formSelect,
    element: <FormSelect2 />,
    route: Route,
    title:'Form Select 2'
  },
  {
    path: route.formValidation,
    element: <FormValidation />,
    route: Route,
    title:'Form Validation'
  },
  {
    path: route.verticalForm,
    element: <FormVertical />,
    route: Route,
    title:'Form Vertical'
  },
  {
    path: route.basicInput,
    element: <BasicInputs />,
    route: Route,
    title:'Basic Inputs'
  },
  {
    path: route.checkboxandRadion,
    element: <CheckboxRadios />,
    route: Route,
    title:'Checkbox Radios'
  },
  {
    path: route.fileUpload,
    element: <FileUpload />,
    route: Route,
    title:'File Upload'
  },
  {
    path: route.fileUpload,
    element: <FileUpload />,
    route: Route,
    title:'File Upload'
  },
  {
    path: route.formMask,
    element: <FormMask />,
    route: Route,
    title:'Form Mask'
  },
  {
    path: route.formSelect,
    element: <FormSelect />,
    route: Route,
    title:'Form Select'
  },
  {
    path: route.formWizard,
    element: <FormWizard />,
    route: Route,
    title:'Form Wizard'
  },
  {
    path: route.gridandGutters,
    element: <GridGutters />,
    route: Route,
    title:'Grid and Gutters'
  },
  {
    path: route.inputGroup,
    element: <InputGroup />,
    route: Route,
    title:'Input Group'
  },
  {
    path: route.featherIcons,
    element: <FeatherIcons />,
    route: Route,
    title:'Feather Icons'
  },
  {
    path: route.falgIcons,
    element: <FlagIcons />,
    route: Route,
    title:'Flag Icons'
  },
  {
    path: route.fantawesome,
    element: <FontawesomeIcons />,
    route: Route,
    title:'Fontawsome Icons'
  },
  {
    path: route.iconicIcon,
    element: <IonicIcons />,
    route: Route,
    title:'Ionic Icons'
  },
  {
    path: route.materialIcon,
    element: <MaterialIcons />,
    route: Route,
    title:'Material Icons'
  },
  {
    path: route.pe7icon,
    element: <PE7Icons />,
    route: Route,
    title:'PE7 Icons'
  },
  {
    path: route.simpleLineIcon,
    element: <SimplelineIcons />,
    route: Route,
    title:'Simple Line Icons'
  },
  {
    path: route.themifyIcon,
    element: <ThemifyIcons />,
    route: Route,
    title:'Themify Icons'
  },
  {
    path: route.typicon,
    element: <TypiconIcons />,
    route: Route,
    title:'Typicon Icons'
  },
  {
    path: route.weatherIcon,
    element: <WeatherIcons />,
    route: Route,
    title:'Weather Icons'
  },
  {
    path: route.users,
    element: <UserList />,
    route: Route,
    title:'Users'
  },
  {
    path: route.blockuser,
    element: <Blockuser />,
    route: Route,
    title:'Block User'
  },
  {
    path: route.reportuser,
    element: <Reportuser />,
    route: Route,
    title:'Report User'
  },
  {
    path: route.inviteuser,
    element: <Inviteuser />,
    route: Route,
    title:'Invite User'
  },
  {
    path: route.group,
    element: <Group />,
    route: Route,
    title:'Group'
  },
  {
    path: route.chats,
    element: <Chats />,
    route: Route,
    title:'chat'
  },
  {
    path: route.calls,
    element: <Calls />,
    route: Route,
    title:'calls'
  },
  {
    path: route.abusemessage,
    element: <AbuseMessage />,
    route: Route,
    title:'abuse-message'
  },
  {
    path: route.stories,
    element: <Stories />,
    route: Route,
    title:'stories'
  },
  {
    path: route.profileSettings,
    element: <ProfileSettings />,
    route: Route,
    title:'profile-settings'
  },
  {
    path: route.Change_Password,
    element: <ChangePassword />,
    route: Route,
    title:'change-password'
  },
  {
    path: route.notification_settings,
    element: <Notification />,
    route: Route,
    title:'notification'
  },
  {
    path: route.companysettings,
    element: <CompanySettings />,
    route: Route,
    title:'company-settings'
  },
  {
    path: route.AuthenticationSettings,
    element: <AuthenticationSettings />,
    route: Route,
    title:'company-settings'
  },
  {
    path: route.socialauth,
    element: <SocialAuth />,
    route: Route,
    title:'social-auth'
  },
  {
    path: route.ChatSettings,
    element: <ChatSettings />,
    route: Route,
    title:'chat-settings'
  },
  {
    path: route.video_audio_settings,
    element: <VideoAudioSettings />,
    route: Route,
    title:'video-audio-settings'
  },
  {
    path: route.custom_fields,
    element: <CustomeFields />,
    route: Route,
    title:'custom-fields'
  },
  {
    path: route.integration,
    element: <Integration />,
    route: Route,
    title:'integrations'
  },
  {
    path: route.localization_settings,
    element: <LocalizationSettings />,
    route: Route,
    title:'localization-settings'
  },
  {
    path: route.email_settings,
    element: <EmailSettings />,
    route: Route,
    title:'email-settings'
  },
  {
    path: route.sms_settings,
    element: <SmsSettings />,
    route: Route,
    title:'sms-settings'
  },
  {
    path: route.otp_settings,
    element: <OtpSettings />,
    route: Route,
    title:'otp'
  },
  {
    path: route.LanguageSettings,
    element: <LanguageSettings />,
    route: Route,
    title:'language-settings'
  },
  {
    path: route.add_LanguageSettings,
    element: <AddLanguage />,
    route: Route,
    title:'add-language'
  },
  {
    path: route.language_web_settings,
    element: <LanguageWeb />,
    route: Route,
    title:'language-web'
  },
  {
    path: route.gdpr_settings,
    element: <GdprSettings />,
    route: Route,
    title:'gdpr'
  },
  {
    path: route.AppearanceSettings,
    element: <AppearanceSettings />,
    route: Route,
    title:'appearance-settings'
  },
  {
    path: route.storage_settings,
    element: <StorageSettings />,
    route: Route,
    title:'storage-settings'
  },
  {
    path: route.backup_settings,
    element: <BackupSettings />,
    route: Route,
    title:'backup-settings'
  },
  {
    path: route.clear_cache_settings,
    element: <ClearCache />,
    route: Route,
    title:'clear-cache-settings'
  },
  {
    path: route.ban_address,
    element: <BanAddress />,
    route: Route,
    title:'ban-address'
  },
  {
    path: route.dataTable,
    element: <DataTables />,
    route: Route,
    title:'Table'
  },
  {
    path: route.tableBasic,
    element: <TablesBasic />,
    route: Route,
    title:'Table'
  },
]
export const adminAuth = [
  {
    path: route.login,
    element: <AdminLogin />,
    route: Route,
    title:'Login'
  },
  {
    path: route.adminForgotPassword,
    element: <AdminForgetPassword />,
    route: Route,
    title:'forget-password'
  },
  {
    path: route.adminResetPassword,
    element: <AdminResetPassword />,
    route: Route,
    title:'forget-password'
  },
  {
    path: route.adminResetPasswordSuccess,
    element: <AdminResetPasswordSuccess />,
    route: Route,
    title:'forget-password'
  },
]
