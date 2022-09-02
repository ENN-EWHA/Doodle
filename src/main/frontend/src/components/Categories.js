import styled from "styled-components";

const Categories = ({ showCategoryClgs }) => {
    const renderCategory = () => {
        const result = [];
        const categories = ["운동", "취미", "공부"];
        categories.map((it) =>
            result.push(
                <CategoryButton
                    onClick={(e) => {
                        showCategoryClgs(it);
                    }}
                >
                    <CategoryName>{it}</CategoryName>
                </CategoryButton>
            )
        );
        return result;
    };
    return <CategoryBox>{renderCategory()}</CategoryBox>;
};

const CategoryBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3.75vw;
`;
const CategoryButton = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.26vw 1.4vw;
    gap: 0.5vw;
    background-color: #f3f3f3;
`;
const CategoryName = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 1vw;
    font-family: HUScribble130;
    line-height: auto;
    color: #000000;
`;

export default Categories;
