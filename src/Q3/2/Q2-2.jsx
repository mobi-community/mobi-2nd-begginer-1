const JoinPage = () => {
    const onSubmitLogin = (e) => {
        e.preventDefault();
        const nickName = e.target.nickName.value;
        const area = e.target.area.value;
        const phone = e.target.area.value;
        alert('헤헤');
    };
    return (
        <>
            <h1>LOGO</h1>
            <p>Information</p>
            <form onSubmit={onSubmitLogin}>
                <input name="nickName" placeholder="NICKNAME" />
                <br />
                <input name="area" placeholder="AREA" />
                <br />
                <input name="phone" placeholder="PHONE-NUMBER" />
                <br />
                <button>Join</button>
            </form>
        </>
    );
};
export default JoinPage;
