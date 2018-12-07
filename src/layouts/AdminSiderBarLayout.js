import SiderBarLayout from './SiderBarLayout';
export default function(props) {
    const menu_config = [
        {
            "title": "用户管理",
            "target": "/admin/user",
            "icon": "user"
        }, {
            "title": "集训管理",
            "target": "",
            "icon": "user"
        }
    ];
    return (
        <SiderBarLayout menu_config={menu_config} {...props} />
    );
}