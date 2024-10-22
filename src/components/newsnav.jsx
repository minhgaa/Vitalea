import Header from "./header"

const NewsNav = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="flex justify-between text-[18px] my-6">
                <ul>Tra cứu bệnh</ul>
                <ul>Tra cứu thuốc & Dược liệu</ul>
                <ul>Mang thai & Nuôi dạy con</ul>
                <ul>Chủ đề được quan tâm nhiều</ul>
                <ul>Bản tin sức khỏe</ul>
            </div>
        </div>
    )
}
export default NewsNav