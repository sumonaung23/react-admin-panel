export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "user", headerName: "User", width: 230, renderCell:(params)=> {
        return (
            <>
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            </>
        )
    }},
    { field: "email", headerName: "Email", width: 230 },
    { field: "age", headerName: 'Age', width: 100 },
    { field: "status", headerName: 'Status', width: 160,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        }}
]

export const userRows = [
        {
            id: 1,
            username: "john_doe",
            img: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg",
            status: "active",
            email: "john.doe@example.com",
            age: 28,
        },
        {
            id: 2,
            username: "jane_smith",
            img: "https://images.unsplash.com/photo-1677123718817-5a203404d638?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
            status: "passive",
            email: "jane.smith@example.com",
            age: 32,
        },
        {
            id: 3,
            username: "david_brown",
            img: "https://images.unsplash.com/photo-1697472925037-e38438b132b0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
            status: "active",
            email: "david.brown@example.com",
            age: 25,
        },
        {
            id: 4,
            username: "lisa_wilson",
            img: "https://images.unsplash.com/photo-1697472106815-829bad01f7b8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
            status: "pending",
            email: "lisa.wilson@example.com",
            age: 29,
        },
        {
            id: 5,
            username: "michael_johnson",
            img: "https://images.unsplash.com/photo-1689997665293-c798b812a244?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
            status: "passive",
            email: "michael.johnson@example.com",
            age: 35,
        },
        
        {
            id: 6,
            username: "jane_smith",
            img: "https://images.unsplash.com/photo-1677123718817-5a203404d638?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
            status: "passive",
            email: "jane.smith@example.com",
            age: 32,
        },
        {
            id: 7,
            username: "david_brown",
            img: "https://images.unsplash.com/photo-1697472925037-e38438b132b0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
            status: "active",
            email: "david.brown@example.com",
            age: 25,
        },
        {
            id: 8,
            username: "lisa_wilson",
            img: "https://images.unsplash.com/photo-1697472106815-829bad01f7b8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
            status: "pending",
            email: "lisa.wilson@example.com",
            age: 29,
        },
        {
            id: 9,
            username: "michael_johnson",
            img: "https://images.unsplash.com/photo-1689997665293-c798b812a244?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
            status: "passive",
            email: "michael.johnson@example.com",
            age: 35,
        },
        {
            id: 10,
            username: "jane_smith",
            img: "https://images.unsplash.com/photo-1677123718817-5a203404d638?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
            status: "passive",
            email: "jane.smith@example.com",
            age: 23,
        },
        {
            id: 11,
            username: "david_brown",
            img: "https://images.unsplash.com/photo-1697472925037-e38438b132b0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
            status: "active",
            email: "david.brown@example.com",
            age: 25,
        },
        {
            id: 12,
            username: "lisa_wilson",
            img: "https://images.unsplash.com/photo-1697472106815-829bad01f7b8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
            status: "pending",
            email: "lisa.wilson@example.com",
            age: 29,
        },
        {
            id: 13,
            username: "michael_johnson",
            img: "https://images.unsplash.com/photo-1689997665293-c798b812a244?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
            status: "passive",
            email: "michael.johnson@example.com",
            age: 35,
        },
    ];
    