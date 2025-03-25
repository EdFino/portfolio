import { SnapType } from "./project-type.type";

export class Project {

    location? : string;
    id : string;

    constructor (public title: string,
                public description: string,
                public imageURL: string,
                public createdAt: Date,
                public snaps: number,){
                    this.id = crypto.randomUUID().substring(0, 8);
                    console.log(this); 
                }

                addSnap (): void {
                    this.snaps ++;
                }

                removeSnap (): void {
                    this.snaps --;
                }

        snap (snapType : SnapType) {
            if (snapType === 'snap') {
                this.addSnap();
            } else if (snapType === 'unsnap') {
                this.removeSnap()
            }
        }

    setLocation (location:string): void {
        this.location = location;
    }

    withLocation (location: string): Project {
        this.setLocation(location);
        return this;
    }

}