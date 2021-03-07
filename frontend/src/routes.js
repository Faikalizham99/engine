import GoogleAPI from './views/Integration/GoogleApi'
import HomePage from './components/Home/HomePage'
import Integration from './views/Integration/Integration'
import Members from './components/Audit/TeamMember/Members'
import DatabaseView from './views/database/DatabaseView'
import DatabaseUpdate from './views/database/DatabaseUpdate'
import DatabaseList from './views/database/DatabaseList'
import Tables from './components/Audit/Table/Table'
import Schema from './components/Audit/Schema/schema'
import DatabaseAudit from './components/Audit/Database/Database'
import Questions from './components/Audit/Questions/question'
import Dashboards from './components/Audit/Dashboards/dashboard'
import MemberOverview from './components/Audit/TeamMember/MemberOverview'
import AuditLog from './components/Audit/TeamMember/AuditLog'
import Downloads from './components/Audit/Downloads/download'
import TableOverview from './components/Audit/Table/TableOverview'
import SchemaOverview from './components/Audit/Schema/SchemaOverview'
import DatabaseOverview from './components/Audit/Database/DatabaseOverview'
import QuestionOverview from './components/Audit/Questions/QuestionOverview'
import DashboardOverview from './components/Audit/Dashboards/DashboardOverview'
import DownloadOverview from './components/Audit/Downloads/DownloadOverview'
import People from './components/People/People'
import Permission from './components/Permission/permission'

var routes = [
    {
        path: "home",
        name: "Home",
        component: HomePage,
        layout: "/",
    },
    {
        path: "integration",
        name: "Integration",
        component: Integration,
        layout: "/",
    },
    {
        path: "google-drive",
        name: "Google Drive",
        component: GoogleAPI,
        invisible: true,
        layout: "/",
    },
    {
        path: "people",
        name: "People",
        component: People,
        layout: "/",
        exact: true,
    },
    {
        path: "audit",
        name: "Audit",
        component: Members,
        layout: "/",
        exact: true,
    },
    {
        path: "permission",
        name: "Permission",
        component: Permission,
        layout: "/",
        exact: true,
    },
    {
        path: "database",
        name: "Database",
        component: DatabaseList,
        layout: "/",
        exact: true,
    },
    {
        path: "database/add",
        name: "AddDatabase",
        component: DatabaseView,
        layout: "/",
        invisible: true,
    },
    {
        path: "database/:id",
        name: "updateDatabase",
        component: DatabaseUpdate,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/members/all",
        name: "Audit-AllMember",
        component: Members,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/members/overview",
        name: "Audit-MemberOverview",
        component: MemberOverview,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/members/log",
        name: "Audit-MemberLog",
        component: AuditLog,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/databases/overview",
        name: "Audit-DatabaseOverview",
        component: DatabaseOverview,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/databases/all",
        name: "Audit-AllDatabase",
        component: DatabaseAudit,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/tables/overview",
        name: "Audit-TableOverview",
        component: TableOverview,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/tables/all",
        name: "Audit-AllTable",
        component: Tables,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/schemas/all",
        name: "Audit-AllSChema",
        component: Schema,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/schemas/overview",
        name: "Audit-SchemaOverview",
        component: SchemaOverview,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/questions/all",
        name: "Audit-AllQuestion",
        component: Questions,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/questions/overview",
        name: "Audit-QuestionOverview",
        component: QuestionOverview,
        layout: "/",
        invisible: true,
    }, 
    {
        path: "audit/dashboards/all",
        name: "Audit-AllDasboard",
        component: Dashboards,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/dashboards/overview",
        name: "Audit-DashboardOverview",
        component: DashboardOverview,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/downloads/all",
        name: "Audit-AllDownload",
        component: Downloads,
        layout: "/",
        invisible: true,
    },
    {
        path: "audit/downloads/overview",
        name: "Audit-DownloadOverview",
        component: DownloadOverview,
        layout: "/",
        invisible: true,
    }
    
    
]

export default routes
