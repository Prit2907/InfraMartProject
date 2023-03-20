import '../Manager/Manager.css'
export function Manager(){



    return(
        <>
        <div className="managertable">
                <table id="adminurl">
                    <a  id="adminurl" href="managedcategory" class="link-primary">Manage_Category</a><br />
                    <a  id="adminurl" href="uploadimage" class="link-secondary">Manage_Product</a><br />
                </table>
            </div>
        </>
    )
}