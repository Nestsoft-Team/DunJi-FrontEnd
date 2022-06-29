// m2 -> 평 변환 훅
export default function useRoomSizeConvert(num: number) {
    const round = (num: number | string): number => {
        return Math.round(Number(num) * 10 * (1 / 3.3)) / 10;
    };

    return round(num);
}
